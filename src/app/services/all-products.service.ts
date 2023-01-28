import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {
  allProducts=[
    {name:"products1",priceBefore:150,price:90,bestSeller:true,id:1,img:"../../assets/images/product1.jpg",sizes:["S","M","L","3XL","4XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg","../../../assets/images/model3.jpg"],availability:20},
    {name:"products2",price:150,id:2,img:"../../assets/images/product2.jpg",sizes:["M","L","XL","XXL","3XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg"],featured:true,availability:10},
    {name:"products3",price:300,id:3,img:"../../assets/images/product3.jpg",sizes:["S","M","L","XXL","4XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg"],availability:15},
    {name:"products4",priceBefore:200,price:150,bestSeller:true,id:4,img:"../../assets/images/product4.jpg",sizes:["S","M","L","3XL","4XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg"],availability:25},
    {name:"products5",price:180,newArrival:true,id:5,img:"../../assets/images/product5.jpg",sizes:["S","M","L","3XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg"],availability:30},
    {name:"products6",price:100,id:6,img:"../../assets/images/product6.jpg",sizes:["S","M","L","3XL","4XL"],branchImages:["../../../assets/images/model.jpg","../../../assets/images/model4.jpg"],availability:0}
  ]

  constructor() { }
  getAllProducts(){
    return this.allProducts;
  }
}
