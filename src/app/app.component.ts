import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trinity-oneCounceling';


  public isMobile = false;

  constructor() {
    this.isMobile = window.innerWidth < 1049;
    console.log("is mobile : ", this.isMobile)
  }
}
