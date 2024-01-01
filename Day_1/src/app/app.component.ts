import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Amazon-Like App</h1>
      <app-search-bar (searchEvent)="performSearch($event)"></app-search-bar>
      <app-search-results [searchResults]="results"></app-search-results>
    </div>
  `,
})
export class AppComponent {
  results: string[] = [];

  performSearch(searchTerm: string) {
    // Simulated API call or database query to fetch search results
    // For simplicity, using static data
    this.results = [
      `Product 1 - ${searchTerm}`,
      `Product 2 - ${searchTerm}`,
      `Product 3 - ${searchTerm}`,
    ];
  }
}
