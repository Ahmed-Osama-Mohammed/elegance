import { AllProductsService } from './../../services/all-products.service';
import { AddToCartService } from './../../services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {
product:any={}
quantity:number=0;
size:string=""
relatedProducts:any
  constructor(private AddToCartService:AddToCartService,private AllProductsService:AllProductsService) { }

  ngOnInit(): void {
    this.getProduct()
  }
  
  getProduct(){
   this.product=this.AddToCartService.getProduct()
   this.relatedProducts=this.AllProductsService.getAllProducts()
  }
  changeImage(id:number){
    let x:any=document.querySelector(".head-img") as HTMLElement;
    x.src=this.product.branchImages[id]

  }
  mainImage(){
    let x:any=document.querySelector(".head-img") as HTMLElement;
    x.src=this.product.img
  }

}
