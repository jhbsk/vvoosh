import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchService {

  constructor(
      private http: Http,
      @Inject('films_url') private url
  ) {}

  getFilms(){
    return this.http
    .get(this.url)
    .map(response => response.json());
  }

}
