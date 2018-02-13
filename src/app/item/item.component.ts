import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public appItemName: string  = "now" ;
  @Input() public appItemPrice: number ;
  @Input() public appItemImage: string  = "now" ;
  @Input() public appItemId: number ;
  @Output() addToCart = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

}
