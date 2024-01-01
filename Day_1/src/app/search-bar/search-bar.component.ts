import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <div>
      <input [(ngModel)]="searchTerm" placeholder="Search for products" />
      <button (click)="search()">Search</button>
    </div>
  `,
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchTerm);
  }
}
