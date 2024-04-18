import { Component } from '@angular/core';
import { siteConfig } from 'src/core/config/site.config';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {

  public config = siteConfig;

}
