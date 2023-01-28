import { AddToCartService } from './../../services/add-to-cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input() product: any ;
  constructor(private AddToCartService:AddToCartService,private router: Router) { }
  ngOnInit() {
  }
  close(){
    let x=document.querySelector(".bg-img") as HTMLElement;
    x.style.display ="none";
  }
  changeImage(id:number){
    let x:any=document.querySelector(".head-img") as HTMLElement;
    x.src=this.product.branchImages[id]

  }
  mainImage(){
    let x:any=document.querySelector(".head-img") as HTMLElement;
    x.src=this.product.img
  }
  addToCart(){
    let x=document.querySelector(".add-bg") as HTMLElement
    let y=document.querySelector(".bg-img") as HTMLElement
    x.style.display="block";
    y.style.display="none"
  }

  setProductToService(){
    this.AddToCartService.setProduct(this.product)
    this.router.navigate(['/product-details']);

  }
}
