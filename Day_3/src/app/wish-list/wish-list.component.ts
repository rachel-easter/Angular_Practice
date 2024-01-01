import { Component } from '@angular/core';
import { Wish } from '../wish.model';
import { WishService } from '../wish.service';

@Component({
  selector: 'app-wish-list',
  template: `
    <div>
      <h2>Wish List</h2>
      <ul>
        <li *ngFor="let wish of wishes">
          {{ wish.name }} - ${{ wish.price }}
          <button (click)="removeWish(wish.id)">Remove</button>
        </li>
      </ul>
      <div>
        <h3>Add a New Wish</h3>
        <label>Name: <input [(ngModel)]="newWish.name" /></label>
        <label>Description: <input [(ngModel)]="newWish.description" /></label>
        <label>Price: <input [(ngModel)]="newWish.price" type="number" /></label>
        <button (click)="addWish()">Add Wish</button>
      </div>
    </div>
  `,
})
export class WishListComponent {
  wishes: Wish[] = [];
  newWish: Wish = { id: 0, name: '', description: '', price: 0, image: '' };

  constructor(private wishService: WishService) {}

  ngOnInit(): void {
    this.wishes = this.wishService.getWishes();
  }

  addWish(): void {
    if (this.newWish.name.trim() !== '') {
      this.wishService.addWish({ ...this.newWish, id: Date.now(), image: 'default-image.jpg' });
      this.newWish = { id: 0, name: '', description: '', price: 0, image: '' };
    }
  }

  removeWish(id: number): void {
    this.wishService.removeWish(id);
  }
}
