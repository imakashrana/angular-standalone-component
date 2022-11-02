import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book, BooksService } from './books.service';
import { ActivatedRoute } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `<div class="grid-container">
          <div class="grid-item">
            <h3>{{ book?.name }}</h3>
            <img width="200" height="200" [src]="book?.imageUrl" [alt]="book?.name"/>
            <div
              class="cart-button"
            >
              <button mat-raised-button>Add to cart</button>
            </div>
          </div>
      </div>
  `,
  styles: [
    `.grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196f3;
        padding: 10px;
      }
      .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        cursor: pointer;
        font-size: 30px;
        text-align: center;
      }
      .cart-button {
        margin-bottom: 20px
      }
      .cart-button button {
    margin-top: 20px;
}`
  ]
})
export class BookViewComponent implements OnInit {
  book: Book | undefined;
  constructor(
    private bookService: BooksService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      if (params['index']) {
        this.book = this.bookService.books[Number(params['index'])];
      }
    })
  }
}
