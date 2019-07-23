import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../../shared/items.service";
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
// import { Item } from "../../models/item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private itemsService: ItemsService) {
  }

  ngOnInit() {
  }
}
