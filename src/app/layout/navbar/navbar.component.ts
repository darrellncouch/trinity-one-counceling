import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public navClass = 'navbar';
  public headingClass = 'navbar__heading';
  public headingPClass = "navbar__heading--primary";
  public headingSClass = "navbar__heading--secondary";
  public menuClass = "navbar__menu"
  public isAtTop = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      console.log(number)
      this.isAtTop = false;
      this.navClass = 'navbar--min';
      this.headingClass = 'navbar__heading--min';
      this.headingPClass = "navbar__heading--primary-min";
      this.headingSClass = "navbar__heading--secondary-min";
      this.menuClass = "navbar__menu--min";
    } else {
      this.navClass = 'navbar';
      this.headingClass = 'navbar__heading';
      this.headingPClass = "navbar__heading--primary";
      this.headingSClass = "navbar__heading--secondary";
      this.menuClass = "navbar__menu";
      this.isAtTop = true;
    }
  }

}
