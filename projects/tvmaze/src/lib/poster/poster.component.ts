import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TvmazeService } from '../tvmaze.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'tm-poster',
  // templateUrl: './poster.component.html',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  // styleUrls: ['./poster.component.css']
  styles: [`
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  `]
})
export class PosterComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: TvmazeService) { }

  ngOnInit() {
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }

}
