import { MoviesProps } from '@/pages';
import { observable } from 'mobx'
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export class MovieStore {
   movie: MoviesProps = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: ''
  };

  addMovie(newMovie: MoviesProps) {
    this.movie = newMovie;
  }

  hydrate = (data) => {
    if(!data) return; 
    this.movie = data.movie !== null ? data.movie : {};
  }
}

export async function fetchInitialStoreState() {
  // You can do anything to fetch initial store state
  return {};
}