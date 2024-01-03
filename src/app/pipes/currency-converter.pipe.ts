import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  transform(amount: number, fromCurrency: string, toCurrency: string): Observable<number> {
    return this.currencyService.getConversionRate(fromCurrency, toCurrency);
  }
}
