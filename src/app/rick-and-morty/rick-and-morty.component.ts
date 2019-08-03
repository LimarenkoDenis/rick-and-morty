import { Component, OnInit } from '@angular/core';
import {data} from './data';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  public rockandMorty = {
    info: {
      count: 0
    },
    results: []
  };

  public rockandMorty$ = of(data).pipe(
    delay(2000)
  );

  public loading = true;


  constructor() { }

  ngOnInit() {
    this.rockandMorty$.subscribe(() => {
      this.loading = false;
    });
    // setTimeout(() => {
    //   this.rockandMorty = data;
    //   this.loading = false;
    // }, 2000)
    // data
    // this.rockandMorty.results[0].name
  }

}
