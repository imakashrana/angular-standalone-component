import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule,MatButtonModule],
  template: `
    <section>
      <div class="grid-container">
        <ng-container *ngFor="let book of bookService?.books; let i = index">
          <div class="grid-item" [routerLink]="'/details/' + i">
            <h3>{{ book?.name }}</h3>
            <img width="200" height="200" [src]="book?.imageUrl" [alt]="book?.name"/>
            <div class="cart-button">
            <button mat-raised-button>Add to cart</button>
            </div>
          </div>
        </ng-container>
      </div>
    </section>
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
}`,
  ],
})
export class BookListComponent implements OnInit {
  constructor(readonly bookService: BooksService) { }

  ngOnInit(): void { }
}
