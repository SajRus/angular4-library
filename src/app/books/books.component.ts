import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  //template: '<app-book></app-book>',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = ['Libro 1', 'Libro 2']; 
  allowNewBook = false;
  bookCrationStatus = 'Nessun libro è stato creato!';
  bookCreated = false;
  bookName = '';
  
  constructor() {
    setTimeout(() => {
      this.allowNewBook = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateBook() {
    this.bookCrationStatus = 'Un libro con nome ' + this.bookName + ' è stato creato!';
    this.books.push(this.bookName);
    this.bookCreated = true;
  }

  onUpdateBookName(event: Event) {
    this.bookName = (<HTMLInputElement>event.target).value;
  }
}
