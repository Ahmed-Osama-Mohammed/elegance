import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DayOfferService {
  dayOffer:object[]=[
      {name:"Printed Tshirt Coffee Blue Color",price:40,img:"../../assets/images/offer1.jpg",  discount:75,catagory:"t-shirt"},
      {name:"Printed Tshirt Coffee Black Color",price:45,img:"../../assets/images/offer2.jpg",  discount:50,catagory:"t-shirt"},
      {name:"Printed Tshirt Coffee Black Color",price:45,img:"../../assets/images/offer2.jpg",  discount:50,catagory:"t-shirt"}
    ]
  

  constructor() { }

  getOffer(){
    return this.dayOffer
  }
}
