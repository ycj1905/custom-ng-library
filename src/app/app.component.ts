import { Component } from '@angular/core';
import { TvmazeService } from 'tvmaze';
import { Show } from 'tvmaze';
import { Observable } from 'rxjs';

@Component({
  selector: 'ld-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <tm-poster [showId]="336"></tm-poster>
    <pre>{{ show$ | async | json}}</pre>
  `
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private tvmaze: TvmazeService) {
    this.show$ = this.tvmaze.getShow(336);
  }
}
