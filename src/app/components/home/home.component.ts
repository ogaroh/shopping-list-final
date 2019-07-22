import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Item } from "../../models/item";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.itemsCollection = this.afs.collection('items');
    this.items = this.itemsCollection.valueChanges(); // to be changed later
  }
  // add item to database
  addItem() {
    // console.log(this.shoppingListForm.value);
  }
}
