import { Component } from '@angular/core';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    //styleUrls: ['./book.component.css']
    styles: [`
      .online{
        color: white;
      }
    `]
})
export class BookComponent {
    bookId: number = 1234;
    bookStatus: string = 'disponibile';

    constructor() {
        this.bookStatus = Math.random() > 0.5 ? 'disponibile' : 'esaurito';
    }
    getBookStatus() {
        return this.bookStatus;
    }

    getColor() {
        return this.bookStatus === 'disponibile' ? 'green' : 'red';
    }
}