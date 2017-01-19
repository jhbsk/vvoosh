import { Component, Inject } from '@angular/core';

const NOT_FOUND: number = -1;
const NO_FILTER: string = 'all';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  private data: Film[] = [];
  private films: Film[] = [];
  private companies: string[] = [];
  private no_filter: string = NO_FILTER;

  constructor(
    @Inject('fetch') private fetch
  ) {
    this.fetch.getFilms().subscribe((films: Film[]) => {
        this.data = films;
        this.films = this.data;
        this.companies = films.reduce(
            (total, elem, index, array) => {
                if (total.indexOf(elem.company) === NOT_FOUND) total.push(elem.company); // Only add unique items to the array (de-duplication)
                return total; // Return the cumulative total
            },
            []
        );
    });
  }

  private filterResults(filterValue: string) {
      return filterValue === this.no_filter
        ? this.films = this.data // Return the whole list
        : this.films = this.data.filter((film: Film) => film.company === filterValue); // Return a filtered list
  }
}

interface Film {
    name: string;
    company: string;
    url: string;
    image: string;
}
