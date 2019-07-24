import { Component, OnInit } from '@angular/core';
import { ItemsService } from "../../shared/items.service";
import { Item } from "../../models/item";
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsData = [];
  items: Item[];

  constructor(public itemsService: ItemsService) { }

  ngOnInit() {
    this.getItemsData();
    this.itemsService.getItems().subscribe(items => {
      // console.log(items);
      this.items = items;
    }
    );
  }

  // fetch items from database
  getItemsData() {
    this.itemsService
      .getItemsData();
  }

  // add item to items data
  addItem = item => this.itemsData.push(item);

  // purge item from items data
  removeItem = item => {
    let index =
      this.itemsData.indexOf(item);
    if (index > -1)
      this.itemsData.splice(index, 1);
  };

  // Called when the user clicks on the '+ Add' button
  onSubmit() {
    this.itemsService.form.value.itemsData = this.itemsData;

    let data = this.itemsService.form.value;

    this.itemsService.createItem(data)
      .then(res => {
        // do something here
      });
    this.itemsService.form.reset();
  }
}
