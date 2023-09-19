import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {

  public expanded = false;
  public loadMenu = false;

  public expandedClass = "mobile-nav";

  public toggleMenu() {
    this.expanded = !this.expanded;
    this.expandedClass = this.expanded ? "mobile-nav--expanded" : "mobile-nav";

    if(this.expanded){
      setTimeout(() => {this.loadMenu = true}, 200);
    }else {
      this.loadMenu = false;
    }
  }
}
