import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Amazon-Like App</h1>
      <app-search-bar (searchEvent)="performSearch($event)"></app-search-bar>
      <app-search-results [products]="results" (productSelected)="showProductDetails($event)"></app-search-results>
    </div>
  `,
})
export class AppComponent {
  results: Product[] = [];
  selectedProductId: number | undefined;

  constructor(private productService: ProductService) {}

  performSearch(searchTerm: string) {
    // Simulated API call or database query to fetch search results
    // For simplicity, using static data
    this.results = this.productService.getProducts();
  }

  showProductDetails(productId: number) {
    this.selectedProductId = productId;
  }
}
