import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  premiumAmount;

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.premiumAmount = this.http.premiumAmount;
  }

}
