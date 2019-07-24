import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Item } from "../models/item";

@Injectable({
  providedIn: 'root'
})


export class ItemsService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  
  constructor(public firestore: AngularFirestore) {
    this.items = this.firestore.collection('items').valueChanges();
  }

  // get items
  getItems() {
    return this.items;
  }

  // item insertion reactive form
  form = new FormGroup({
    item_name: new FormControl(''),
    item_price: new FormControl()
  })

  // create new item 
  createItem(data) {
    return new Promise<Item>((resolve, reject) => {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // read items in database with latest changes
  getItemsData() {
    return this.firestore.collection('items')
      .valueChanges()
      .subscribe(val => console.log(val));
  }

}