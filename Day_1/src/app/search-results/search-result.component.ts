import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  template: `
    <div>
      <h2>Search Results</h2>
      <ul>
        <li *ngFor="let result of searchResults">{{ result }}</li>
      </ul>
    </div>
  `,
})
export class SearchResultsComponent {
  @Input() searchResults: string[] = [];
}
