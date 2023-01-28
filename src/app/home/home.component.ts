import { Component, OnInit } from '@angular/core';
import { DayOfferService } from '../services/day-offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dayOffers:any
  dayOffer:any=[]

  constructor(private DayOfferService: DayOfferService) {
    this.dayOffers =this.DayOfferService.getOffer()
    this.dayOffer=this.dayOffers.slice(0, 2)
   }

  ngOnInit(): void {
  }

}
