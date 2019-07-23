import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() { }

  form = new FormGroup({
    item_name: new FormControl(''),
    item_price: new FormControl()
  })
}
