import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

// class item
import { Item } from "../../model/item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

}
