import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.changeText()
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('fix');
      } else {
        element.classList.remove('fix');
      }
    }

    openCart() {
      let x: any = document.querySelector('.cart-sidebar');
      x.style.right = 0;
    }

  changeText(){
    let x:any = document.querySelector(".call");
    if(x.innerHTML ==="Call Us Now! 123-456-7890"){
      x.innerHTML="We Deliver to Your Doorstep"
      setInterval(this.changeText,4000);
  
    }
    else{
      x.innerHTML="Call Us Now! 123-456-7890"
      setInterval(this.changeText,4000);
    }
  }

  hideLogin(){
    let x=document.querySelector(".login") as HTMLElement;
    x.style.display="none"
  }

}
