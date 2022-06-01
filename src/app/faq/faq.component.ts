import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  constructor() { }
  showF: any = false;

  ngOnInit(): void {
  }
  showfaqDiv(a: any) {
    this.showF = true;
  }

}
