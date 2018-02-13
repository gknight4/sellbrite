import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppProduct } from '../catalog/catalog.product.model';
//import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart: number[] = [] ;
  @Input() ap: AppProduct [] = [] ;
  @Input() total: number = 1234 ;
  @Output() deleteItem = new EventEmitter<Number>();

  constructor() { }

  public outDeleteItem (id: number){
//    console.log("delete " + id);
    this.deleteItem.emit(id);
  }

  ngOnInit() {
//    deleteItem(5);
//    this.cart.subscribe(data => console.log(data)) ;
  }

}
