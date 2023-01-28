import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cart:any[]=[]
  product:{}={}
   constructor(){
  }
setCart(products:any){
  this.cart = products;
}
getCart(){
  return this.cart;
}
setProduct(product:any){
  this.product=product;
}
getProduct(){
  return this.product
}
}