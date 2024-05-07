import { Component } from '@angular/core';
import { siteConfig } from 'src/core/config/site.config';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {

  public config = siteConfig;

  public assetPath = "../../../assets/images/";
  public kinoLogo = this.config.siteInfo.professional.content[0].logo;
  public calveryLogo = this.config.siteInfo.professional.content[1].logo;

  public pathBuilder = (arg: {id: number, fileName: string, altText: string}) => this.assetPath + arg.fileName;

}
