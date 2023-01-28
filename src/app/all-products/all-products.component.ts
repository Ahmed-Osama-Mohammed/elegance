import { AddToCartService } from './../services/add-to-cart.service';
import { AllProductsService } from './../services/all-products.service';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],  
})
export class AllProductsComponent implements OnInit {
  allCollections:any=[];
  sort:string="Name Ascending";
  catagory:string=""
  catagories:string[]=[
    "Summer Collection",
    "Winter Collection",
    "Day Offers",
];
size:string="";
sizes:string[]=[
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "7XL",
  "BS1",
  "BS2",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15"
]
productType:string="";
productTypes:string[]=[
  "T-Shirt",
  "Shirt",
  "Skirt",
  "Dress",
  "Jacket",
  "Pants",
  "Shorts",
  "Underwears"
]
color:string="";
colors:string[]= [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
]
price:number=0
selectedProducts:any={};
  constructor(private AddToCartService:AddToCartService,private AllProductsService:AllProductsService ,private viewportScroller:ViewportScroller) {
    this.allCollections=this.AllProductsService.getAllProducts()
   }

  ngOnInit(): void {
  }
  openQuickImgView(){
    let x: any = document.querySelector(".bg-img") as HTMLElement;
    x.style.display = "block";
  }
  selectedProduct(index:number){
    this.selectedProducts=this.allCollections[index];
    console.log(this.selectedProducts);
   }
   openAddToCart() {
    let x:any=document.querySelector(".add-bg")
    x.style.display="block"
   }
  
  divsSort() {
    let rec:any=[]
    let fea:any=[]
   if (this.sort.toLowerCase() == 'name ascending') {
      this.allCollections.sort(function (a:any, b:any) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    }
     else if (this.sort.toLowerCase() == 'name descending') {
      this.allCollections.sort(function (a:any, b:any) {
        return b.name < a.name ? -1 : b.name > a.name ? 1 : 0;
      });
    }
     else if (this.sort.toLowerCase() == 'price ascending') {
      this.allCollections.sort(function (a:any, b:any) {
        if (a.price === 0) return 1;
        else if (b.price === 0) return -1;
        else return a.price - b.price ;
      });
    }
     else if (this.sort.toLowerCase() == 'price descending') {
      this.allCollections.sort(function (a:any, b:any) {
        if (a.price === 0) return 1;
        else if (b.price === 0) return -1;
        else return b.price - a.price;
      });
    }
    else if (this.sort.toLowerCase() == 'featured products') {
      for (let x = 0; x < this.allCollections.length; x++) {
        if (this.allCollections[x].featured === true) {
          fea.push(this.allCollections[x]);
        }
      }
      this.allCollections=fea.concat(this.allCollections);
      for (let y = 0; y < this.allCollections.length; y++) {
        for (let z = y + 1; z < this.allCollections.length; z++) {
          if (this.allCollections[y].name == this.allCollections[z].name) {
            this.allCollections.splice(z, 1);
          }
        }
      }
    }
    else if (this.sort.toLowerCase() == 'best seller') {
      for (let i = 0; i < this.allCollections.length; i++) {
        if (this.allCollections[i].bestSeller === true) {
          rec.push(this.allCollections[i]);
        }
      }
      this.allCollections=rec.concat(this.allCollections);
      for (let j = 0; j < this.allCollections.length; j++) {
        for (let k = j + 1; k < this.allCollections.length; k++) {
          if (this.allCollections[j].name == this.allCollections[k].name) {
            this.allCollections.splice(k, 1);
          }
        }
      }
    }
    else if (this.sort.toLowerCase() == 'new arrival') {
      for (let i = 0; i < this.allCollections.length; i++) {
        if (this.allCollections[i].newArrival === true) {
          rec.push(this.allCollections[i]);
        }
      }
      this.allCollections=rec.concat(this.allCollections);
      for (let j = 0; j < this.allCollections.length; j++) {
        for (let k = j + 1; k < this.allCollections.length; k++) {
          if (this.allCollections[j].name == this.allCollections[k].name) {
            this.allCollections.splice(k, 1);
          }
        }
      }
    }
  }
  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}
extend() {
  let x: any = document.querySelector('.cart-sidebar');
  x.style.right = '-600px';
}
openFilter(){
  let filter = document.querySelector('section#filters') as HTMLElement;
  filter.style.left ="0px"
}
close(){
  let filter = document.querySelector('section#filters') as HTMLElement;
  filter.style.left ="-500px"
}


}

