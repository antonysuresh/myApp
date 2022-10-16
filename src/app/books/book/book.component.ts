import { CartService } from '../../cart/cart.service';
import { Book } from '../../types/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  isInCart: Boolean = false;

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book)
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
