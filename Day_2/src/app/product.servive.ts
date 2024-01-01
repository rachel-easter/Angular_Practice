import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      availability: true,
      deliveryCharge: 5.99,
      picture: 'product1.jpg',
      reviews: ['Great product!', 'Good quality.'],
    },
    // Add more products...
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }
}
