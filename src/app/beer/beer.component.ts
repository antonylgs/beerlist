import { Component, Input } from '@angular/core';

@Component({
  selector: 'blst-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent {
  @Input() beer: any;
}
