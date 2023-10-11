import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({  
  selector: 'app-product-details',  
  templateUrl: './product-details.component.html',  
  styleUrls: ['./product-details.component.css']
})
  
export class ProductDetailsComponent implements OnInit { 
    product: Product | undefined; 

    constructor(
      private route: ActivatedRoute,
      private cartService:CartService
      ){}  

    ngOnInit() {  
      const routerParams = this.route.snapshot.paramMap;    
      const productIdFromRoute = Number(routerParams.get('productId'))

      this.product = products.find(product => product.id === productIdFromRoute)
  }
  onNotify(){
    window.alert('Se le notificará cuando el producto salga a la venta')
  }
  
  addToCart(product:Product){
    this.cartService.addToCart(product)
    console.log("Tu producto ha sido añadido correctamente.")
  }

  clearCart(product:Product){
    this.cartService.clearCart() 
    console.log("El producto se ha eliminado del carrito.")
  }
} 