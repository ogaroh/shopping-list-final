import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { Item } from "../../models/item";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  shoppping_items = new Item('','', 0);

  shoppingListForm = new FormGroup({
    item: new FormControl(''),
    price: new FormControl(),
  });

  constructor() {
    
  }

  ngOnInit() {

  }
  // add item to database
  addItem() {
    console.log(this.shoppingListForm.value);
  }
}
