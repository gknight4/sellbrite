// see Overview at end

import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("SellBrite Catalog");
  }

}
/*********************** Overview ****************************
Components:
app - container for all other components
cart - cart page
catalog - catalog page, manages cart, header, item
header
item - each item on the catalog page

catalog component
contains the shopping cart (cart) and the total list of products (ap)

How it Works: The App template places the Header and Catalog templates on the page. The Header component would manage the menu functions, but currently only serves to control the hide / show of the Cart component, and display the number of items in the cart. The Catalog component does all the heavy lifting. It places the Item templates on the page to display the products, and hides / shows the Cart template.

The Catalog component acquires the product list (defined in data.model.ts) using HttpClient, in ngOnInit, stores the list as "ap", an array of AppProduct objects (defined in catalog.product.model.ts), and then reformats the information into an array of arrays of 4 products: apLines, in "initProducts". Each of these arrays of 4 will become a row in the template.

The Catalog component also manages the shopping cart, "cart", with addItem, deleteItem, and cartChange. The visibility of the cart is handeled by hideShowCart.

The Catalog displays the Item components in two nested ngFor loops: the first iterates through the arrays of four items, and the second iterates through the four items *in* each array.

The Item component displays a single product item, with Name, Price, Image, and Id injected by the Catalog component.

The Header component implements updateCart to display the current cart contents. It also generates the showCart event.

InterComponent communication:
Item generates an addToCart(itemId) event, which is consumed as an addItem method in Catalog.

Catalog generates a cartUpdate(numberOfItems) event which is directed to the header.updateCart method in the app template to show the number of items in the cart.

Catalog injects Name, Price, Image, and Id information into each Item component it creates.

Header generates a showCart event, which is directed to the catalog.hideShowCart method in the app template.



appscatalog
HeaderComponent
components:
/catalog/featured
/catalog/shirts
/catalog/jackets

catalog
header
item

/cart
cartpage
header
cart

featured, shirts, jacket, sweater, boots
price: < 30 <70
*/
