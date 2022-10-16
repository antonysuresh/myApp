import { BooksService } from './books.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../types/types';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.Books = this.booksService.getBooks();
  }

  Books: Book[] = [];

  isShowing: Boolean = true;

  cart: Book[] = [];

}
