import { Review } from './review';
export type Movie = {
  id: number;
  title: string;
  director: string;
  year: number;
  imgUrl: string;
  synopsis: string;
  genreId: number;
  reviews: Review[];
};
