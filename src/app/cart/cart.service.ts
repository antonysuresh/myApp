import { Book } from '../types/types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }



  cart: Book[] = [];

  add(book: Book) {
    console.log(book);
    this.cart.push(book);
  }
  get() {
    return this.cart;
  }
  remove(book: Book){
    this.cart = this.cart.filter((b) => b !== book);
  }

}
