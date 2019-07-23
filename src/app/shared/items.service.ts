import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
// import { Item } from "../models/item";

@Injectable({
  providedIn: 'root'
})


export class ItemsService {
  itemsCollectionRef: any;
  item$: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    // ...
    this.itemsCollectionRef = this.firestore.collection('items');
    this.item$ = this.itemsCollectionRef.valueChanges();
  }

  // collection reference

  // item insertion reactive form
  form = new FormGroup({
    item_name: new FormControl(''),
    item_price: new FormControl()
  })

  // create new item 
  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("items")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // read items in database with latest changes
  getItemsData() {
    return this.firestore.collection("items").snapshotChanges();
  }

}