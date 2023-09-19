import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.component.html',
  styleUrls: ['./practice-areas.component.scss']
})
export class PracticeAreasComponent {


  @Input()
  public isMobile = false;
}
