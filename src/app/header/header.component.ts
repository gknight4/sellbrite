import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  cartText: string ;
  @Output() showCart = new EventEmitter();

  clickCart(){
    this.showCart.emit();
  }

  private updateCart (cartLength){
// called from app template
    if (cartLength > 0) {
      var plural = cartLength == 1 ? "" : "s" ;
      this.cartText = cartLength + " item" + plural + " in Cart"
    } else {this.cartText = "Cart is Empty"}
  }

  constructor() { }

  ngOnInit() {  }

}
