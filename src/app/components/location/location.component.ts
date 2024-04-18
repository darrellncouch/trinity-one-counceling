import { Component } from '@angular/core';
import { siteConfig } from 'src/core/config/site.config';
import { IPerson } from 'src/core/interfaces/IPerson';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  public info = siteConfig.contactInfo;
  public phone = siteConfig.contactInfo.phoneDisplay();
  public companyName = siteConfig.companyName;

  constructor(){
  }
}
