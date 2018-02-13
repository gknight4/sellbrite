import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AppProduct } from './catalog.product.model';
import { InputData } from './data.model';
import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  private cart: number [] = [] ;
  public ap: AppProduct [] = [] ;
  public apLines: AppProduct [] [] = [] ;
  public divStyle = {
    filter: "blur(0px)",
    opacity: 1.0,
    "pointer-events": "auto"} ;
  public showCart: boolean = false ;
  @Output() cartUpdate = new EventEmitter<Number>();
  private total: number = 0 ;

  constructor(private http: HttpClient) { }

  private cartChange(){
    this.total = 0 ;
    for (var i = 0 ; i < this.cart.length ; i++) {
      this.total += this.ap[this.cart[i]].price ;
    }
    this.cartUpdate.emit(this.cart.length)
  }

  private addItem(id){
    this.cart.push(id) ;
    this.cartChange();
  }

  private deleteItem (event: number){
    this.cart.splice(event, 1) ;
    this.cartChange();
  }

  private initProducts (data: InputData){
    var apLine: AppProduct [] = [] ;
    this.ap = data.products ;
    var j = 0 ;
    for (var i = 0 ; i < this.ap.length ; i++){
      this.ap[i].id = i ;
      apLine.push(this.ap [i]) ;
      if (apLine.length >= 4) {
        this.apLines.push(apLine) ;
        apLine = [] ;
        //k = 0 ;
      }
    }
    if ((i % 4) != 0) this.apLines.push(apLine) ;
  }

private hideShowCart(){
  if (this.showCart = !this.showCart){
    this.divStyle = {
      filter: "blur(5px)",
      opacity: 0.3,
      "pointer-events": "none"} ;
  } else {
    this.divStyle = {
      filter: "blur(0px)",
      opacity: 1.0,
      "pointer-events": "auto"} ;
  }
}

  ngOnInit() {
    this.cartChange();
    this.http.get("assets/product-payload.json")
      .subscribe((data: InputData)=>{
        this.initProducts(data);
      });
  }

}
