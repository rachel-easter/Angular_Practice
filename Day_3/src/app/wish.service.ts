import { Injectable } from '@angular/core';
import { Wish } from './wish.model';

@Injectable({
  providedIn: 'root',
})
export class WishService {
  private wishes: Wish[] = [
    {
      id: 1,
      name: 'Wish 1',
      description: 'This is the first wish.',
      price: 20.99,
      image: 'wish1.jpg',
    },
   
  ];

  getWishes(): Wish[] {
    return this.wishes;
  }

  addWish(wish: Wish): void {
    this.wishes.push(wish);
  }

  removeWish(id: number): void {
    const index = this.wishes.findIndex((wish) => wish.id === id);
    if (index !== -1) {
      this.wishes.splice(index, 1);
    }
  }
}
