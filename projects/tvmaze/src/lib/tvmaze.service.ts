import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Show} from './tvmaze.models';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  private readonly apiRoot = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  getShow(id: number): Observable<Show> {
    const url = `${this.apiRoot}/shows/${id}`;
    // return this.http.get<any>(url);
    return this.http.get<Show>(url);
  }
}
