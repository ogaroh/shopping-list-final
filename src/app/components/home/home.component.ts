import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

// class item
import { Item } from "../../models/item";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // submit new data to cloud firestore
  onSubmit(){

  }

}
