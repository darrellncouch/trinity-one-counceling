import { Component } from '@angular/core';
import { siteConfig } from 'src/core/config/site.config';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {

  public expanded = false;
  public loadMenu = false;
  public config = siteConfig;

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
