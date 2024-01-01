import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  template: `
    <div *ngIf="product">
      <h2>{{ product.name }}</h2>
      <p>Price: ${{ product.price }}</p>
      <p>Availability: {{ product.availability ? 'In Stock' : 'Out of Stock' }}</p>
      <p>Delivery Charge: ${{ product.deliveryCharge }}</p>
      <img [src]="product.picture" alt="{{ product.name }}" />
      <h3>Reviews:</h3>
      <ul>
        <li *ngFor="let review of product.reviews">{{ review }}</li>
      </ul>
      <button (click)="addToCart()">Add to Cart</button>
      <button (click)="buyNow()">Buy Now</button>
    </div>
  `,
})
export class ProductDetailComponent {
  @Input() product: Product | undefined;

  addToCart() {
    // Add logic to add the product to the shopping cart
    console.log('Added to Cart:', this.product);
  }

  buyNow() {
    // Add logic to initiate the purchase process
    console.log('Buy Now:', this.product);
  }
}
