import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-search-results',
  template: `
    <div>
      <h2>Search Results</h2>
      <ul>
        <li *ngFor="let product of products" (click)="showProductDetails(product.id)">
          {{ product.name }}
        </li>
      </ul>
    </div>
    <app-product-detail [product]="selectedProduct"></app-product-detail>
  `,
})
export class SearchResultsComponent {
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<number>();
  selectedProduct: Product | undefined;

  showProductDetails(productId: number) {
    this.selectedProduct = this.products.find((product) => product.id === productId);
    this.productSelected.emit(productId);
  }
}
