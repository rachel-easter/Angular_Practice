import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private exchangeRates: { [key: string]: number } = {
    //static approach
    'USD': 1,  // Assuming base currency is USD
    'EUR': 0.85, // Example exchange rate for Euro
    //Here we can use the dynamic approach ....by using the OpenExchangeapi....using httpresponses    
  };

  getConversionRate(fromCurrency: string, toCurrency: string): Observable<number> {
    const baseRate = this.exchangeRates[fromCurrency];
    const targetRate = this.exchangeRates[toCurrency];

    if (baseRate && targetRate) {
      return of(targetRate / baseRate);
    } else {
      console.error('Invalid currencies:', fromCurrency, toCurrency);
      throw new Error('Invalid currencies');
    }
  }
}
