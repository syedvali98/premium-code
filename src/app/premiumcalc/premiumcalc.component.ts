import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premiumcalc',
  templateUrl: './premiumcalc.component.html',
  styleUrls: ['./premiumcalc.component.css']
})
export class PremiumcalcComponent implements OnInit {

  age;
  diffage;
  percent;
  premium;
  smoke;
  dSmoke;

  constructor(public http:HttpService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.diffage = this.age -20;
    this.percent = this.diffage * 2;
    if(this.smoke == true){
      this.premium = 2000 + (this.percent*2000)/100;
      this.premium = this.premium + (12*this.premium)/100;
    }
    else{
      this.premium = 2000 + (this.percent*2000)/100;
    }
    this.http.premiumAmount = this.premium;
    this.router.navigate(['/preview'])

  }
}
