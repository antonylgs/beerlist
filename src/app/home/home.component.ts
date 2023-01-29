import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'blst-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  beers: any;
  title: string = 'Beer List';

  constructor(private http: HttpClient) {
    this.getBeers();
  }

  getBeers() {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe((data) => {
      this.beers = data;
      this.beers = this.beers.sort((a: any, b: any): any => {
        return (
          new Date(
            b.first_brewed.substr(3, 4) + ',' + b.first_brewed.substr(0, 2)
          ).valueOf() -
          new Date(
            a.first_brewed.substr(3, 4) + ',' + a.first_brewed.substr(0, 2)
          ).valueOf()
        );
      });
    });
  }
}
