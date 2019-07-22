import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

// class item
import { Item } from "./models/item";

const collection_endpoint = 'items';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  items: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private db: AngularFirestore) {
    // get the items collection from cloud firestore
    this.items = db.collection<Item>(collection_endpoint);
  }
  // add item to cloud firestore database
  addItem(item) {
    this.items.add(item);
  }
  // update item
  updateItem(id, update) {
    // get item document
    this.itemDoc = this.db.doc<Item>(`${collection_endpoint}/${id}`);

    // update doc
    this.itemDoc.update(update);
  }

  // delete item from cloud firestore database
  deleteItem(id) {
    // get item doc
    this.itemDoc = this.db.doc<Item>(`${collection_endpoint}/${id}`);
    // delete doc
    this.itemDoc.delete();
  }
}
