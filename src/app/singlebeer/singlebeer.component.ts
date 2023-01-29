import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'blst-singlebeer',
  templateUrl: './singlebeer.component.html',
  styleUrls: ['./singlebeer.component.scss'],
})
export class SinglebeerComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.getBeerById(this.route.snapshot.params['id']);
  }

  beer: any;

  getBeerById(id: number) {
    this.http
      .get('https://api.punkapi.com/v2/beers/' + id)
      .subscribe((data: any) => {
        this.beer = data[0];
      });
  }
}
