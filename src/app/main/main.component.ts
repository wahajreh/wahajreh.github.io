import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  main_img: any = 'assets/images/Connection.png';
  ngOnInit(): void {
  }
  div1: any = true;
  div2: any;
  div3: any;
  div11: any;
  div12: any = true;
  div13: any = true;

  main_imagS(a: any) {
    // alert();
    if (a == 1) {
      this.main_img = 'assets/images/Connection.png';
      this.div1 = true;
      this.div2 = false;
      this.div3 = false;
      this.div11 = false;
      this.div12 = true;
      this.div13 = true;
    }
    if (a == 2) {
      this.main_img = 'assets/images/Connection (1).png';
      this.div1 = false;
      this.div2 = true;
      this.div3 = false;
      this.div11 = true;
      this.div12 = false;
      this.div13 = true;

    }
    if (a == 3) {
      this.main_img = 'assets/images/Connection (2).png';
      this.div1 = false;
      this.div2 = false;
      this.div3 = true;

      this.div11 = true;
      this.div12 = true;
      this.div13 = false;

    }
  }

}
