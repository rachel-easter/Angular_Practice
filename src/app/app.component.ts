import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  amount!: number;
  fromCurrency!: string ;
  toCurrency!: string ;
  conversionRate!: number;
  conversionResult: number|undefined;
  currencies = [
    { name: 'US Dollar', code: 'USD' },
    { name: 'Euro', code: 'EUR' },
   
  ];

  constructor(private currencyService: CurrencyService) {}

  convertCurrency() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      this.currencyService.getConversionRate(this.fromCurrency, this.toCurrency)
        .subscribe({         
          next: rate => {
            this.conversionRate = rate;
            this.calculateConversionResult();
          },
          error: error => {
            console.error('Error converting currency:', error);
            // Handle error as needed
            this.conversionResult = undefined; // Reset result in case of error
          }
    });
    }
  }

  private calculateConversionResult() {
    this.conversionResult = this.amount && this.conversionRate ? this.amount * this.conversionRate : undefined;
  }
}
