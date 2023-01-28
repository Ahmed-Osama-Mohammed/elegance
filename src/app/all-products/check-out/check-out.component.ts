import { AddToCartService } from '../../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkout:any[]=[]
  total:number=0
  shipping:number|string="Free"
  key1:boolean=true;
  key2:boolean=true;
  promoCode:any={
    title:"FRST20",
    available:true
  }
  promo:string=""
  constructor(private AddToCartService:AddToCartService) { }

  getCart(){
    
    this.checkout=this.AddToCartService.getCart()
  }


  openKey2(){
    this.key2=false;
  }
  openKey1(){
    this.key1=false;
  }
  setTotal(){
    this.total = 0;
    for (let i = 0; i < this.checkout.length; i++) {
      this.total +=
      this.checkout[i].price * this.checkout[i].quantity;
  }
}
removeProduct(i: number) {
  this.checkout.splice(i, 1);
  this.setTotal();
  this.promoCode.available=true
  this.onKeydown()
}


onKeydown() {
  this.setTotal()
  if(this.promo.toLocaleLowerCase()==this.promoCode.title.toLocaleLowerCase() && this.promoCode.available===true) {
      this.total=this.total-(this.total*(20/100))
      this.promoCode.available=false; 
     return this.promoCode.first=true 
    }
    else if(this.promo==this.promoCode.title && this.promoCode.available==false){
      return this.promoCode.isUsed=true
    }
    else{
      return this.promoCode.inValid=true
    }

  }


ngOnInit(): void {
  this.getCart();
  this.setTotal()}

}
