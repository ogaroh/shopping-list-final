import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AppService } from "../../app.service";
import { Observable } from 'rxjs';

const collection_endpoint = 'items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore, private itemService: AppService) {
  }

  ngOnInit() {
    this.items =
      this.db.collection(collection_endpoint).valueChanges();
  }
}
