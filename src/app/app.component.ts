import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookElements = [];
  newBookName = '';
  newBookContent = '';

  onAddBook() {
    this.bookElements.push({
      type: 'book',
      name: this.newBookName,
      content: this.newBookContent
    });
  }

  onAddMagazine() {
    this.bookElements.push({
      type: 'magazine',
      name: this.newBookName,
      content: this.newBookContent
    });
  }
}
