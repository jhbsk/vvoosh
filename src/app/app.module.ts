import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';

import { FetchService } from './services/fetch/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      { provide: 'fetch', useClass: FetchService },
      { provide: 'films_url', useValue: '/data/films.json' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
