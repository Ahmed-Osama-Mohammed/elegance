import { AllProductsService } from './../../services/all-products.service';
import { AddToCartService } from '../../services/add-to-cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-view-add-cart',
  templateUrl: './quick-view-add-cart.component.html',
  styleUrls: ['./quick-view-add-cart.component.css'],
})
export class QuickViewAddCartComponent implements OnInit {
  @Input() selectedProduct: any = {
    name: '',
    priceBefore: 0,
    price: 0,
    bestSeller: true,
    newArrival: true,
    id: 0,
    img: '',
    sizes: [],
    quantity: 0,
    size: 0,
  };
  sizes: [] = [];
  quantites: number[] = [];
  quantity: number = 1;
  selectedSizes: string[] = [];
  size: string = '';
  selectedProducts: any[] = [];
  total: number = 0;
  cart: any[] = [];
  constructor(
    private AllProductsService: AllProductsService,
    private AddToCartService: AddToCartService
  ) {}
  

  ngOnInit(): void {}

  AddToCart() {
    let quantites: number[] = this.quantites;
    let sizes: any[] = this.selectedSizes;
    quantites[quantites.length] = this.quantity;
    sizes[sizes.length] = this.size;

    this.selectedSizes = sizes;
    this.quantites = quantites;
    this.selectedProducts.push(this.selectedProduct);

    let combined = this.selectedProducts.map(function (item, index) {
      return {
        name: item.name,
        priceBefore: item.priceBefore,
        price: item.price,
        bestSeller: item.bestSeller,
        newArrival: item.newArrival,
        id: item.id,
        img: item.img,
        quantity: quantites[index],
        size: sizes[index],
      };
    });
    for (let i = 0; i < combined.length; i++) {
      for (let j = i + 1; j < combined.length; j++) {
        if (
          combined[i].name == combined[j].name &&
          combined[i].size == combined[j].size
        ) {
          combined[i].quantity += combined[j].quantity;
          quantites[i] = combined[i].quantity;
          quantites.splice(j, 1);
          sizes.splice(j, 1);
          combined.splice(j, 1);
          this.selectedProducts.splice(j, 1);
        }
      }
    }
    return (this.cart = combined);
  }

  getSizes() {
    this.sizes = this.selectedProduct.sizes;
  }
  removeProduct(index: number) {
    this.cart.splice(index, 1);
    this.selectedSizes.splice(index, 1);
    this.quantites.splice(index, 1);
    this.selectedProducts.splice(index, 1);
    this.setTotal();
  }
  setTotal() {
    for (let i = 0; i < this.cart.length; i++) {
      this.total += this.cart[i].price * this.cart[i].quantity;
    }
    return this.total;
  }

  closed() {
    let x: any = document.querySelector('.add-bg');
    x.style.display = 'none';
    console.log(this.selectedProduct);
  }
  openCart() {
    this.total=0;
    let x: any = document.querySelector('.cart-sidebar');
    x.style.right = 0;
    this.closed()
  }
  extend() {
    let x: any = document.querySelector('.cart-sidebar');
    x.style.right = '-600px';
    setTimeout(this.close, 500);
  }
  close() {
    let y: any = document.querySelector('.side-bg ');
    y.style.display = 'none';
  }

   sendCart(){
     this.AddToCartService.setCart(this.cart)
   }
   openView(){
     let x = document.querySelector('.bg-img') as HTMLElement;
     x.style.display="block";
   }
}

