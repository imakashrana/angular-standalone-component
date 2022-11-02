import { Injectable } from '@angular/core';

export interface Book {
  name: string;
  id: number;
  description: string;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [
    {
      name: 'Book 1',
      id: 1,
      description: 'Book description 1',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg'
    },
    {
      name: 'Book 2',
      id: 2,
      description: 'Book description 2',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg'
    },
    {
      name: 'Book 3',
      id: 3,
      description: 'Book description 3',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg'
    },
    {
      name: 'Book 4',
      id: 4,
      description: 'Book description 4',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg'
    }
  ];
  constructor() { }
}
