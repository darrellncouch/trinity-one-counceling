import { Component } from '@angular/core';
import { siteConfig } from 'src/core/config/site.config';
import { IPerson } from 'src/core/interfaces/IPerson';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public config = siteConfig;
  public currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }


}
