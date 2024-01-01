import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishService } from './wish.service';

@NgModule({
  declarations: [AppComponent, WishListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [WishService],
  bootstrap: [AppComponent],
})
export class AppModule {}
