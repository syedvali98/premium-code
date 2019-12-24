import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  value: any;
  inrValue;
  eurValue;
  rate;
  premiumAmount;
  discount=10;

  constructor(public http: HttpClient, public httpService: HttpService,private router: Router) { }

  ngOnInit() {
    this.http.get('https://api.exchangeratesapi.io/latest?symbols=INR').subscribe((_value) => {
      this.rate = _value;
      this.eurValue = (this.premiumAmount / 2) / this.rate.rates.INR;
    })
    this.premiumAmount = this.httpService.premiumAmount;
    this.inrValue = this.premiumAmount / 2;
    
  }

  change() {
    this.inrValue = (this.value * this.premiumAmount) / 100;
    this.eurValue = (((100 - this.value) * this.premiumAmount) / 100)/this.rate.rates.INR;
    this.discount = 10-((-100 + 2*(this.value))/10);
  }
}
