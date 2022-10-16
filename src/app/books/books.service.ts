import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Clean Code',
        author: 'Martin Robert',
        image: 'https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY218_.jpg',
        amount: 700
      },
      {
        name: 'Clean Code in Javascript',
        author: 'James Padolsey',
        image: 'https://m.media-amazon.com/images/I/71a+EV3OuHL._AC_UY218_.jpg',
        amount: 800
      },
      {
        name: 'The Da Vinci Code',
        author: 'Dan Brown',
        image: 'https://m.media-amazon.com/images/I/41yT41SG23L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 600
      },
      {
        name: 'C Programming',
        author: 'Darrel L. Graham',
        image: 'https://m.media-amazon.com/images/I/91-l2iv-4hL._AC_UY218_.jpg',
        amount: 900
      }
      
      
    ]
  }


}
