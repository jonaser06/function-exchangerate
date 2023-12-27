import { Injectable } from '@nestjs/common';
import { ExchangeRateRepository } from 'src/service/domain/clients/repository/exchange-rate.interface';
import { NotFoundError } from 'src/service/domain/error/repository/not-found.error';
import { ExchangeRate } from 'src/service/domain/model/exchange-rate.model';

@Injectable()
export class InMemoryExchangeRateRepository implements ExchangeRateRepository {
  private readonly exchangeRates: ExchangeRate[] = [
    new ExchangeRate('USD', 'PEN', 3.67),
    new ExchangeRate('PEN', 'USD', 0.27),
    new ExchangeRate('USD', 'EUR', 0.85),
    new ExchangeRate('EUR', 'USD', 1.18),
    // Add more exchange rates as needed
  ];

  async getExchangeRate(
    currencyFrom: string,
    currencyTo: string,
  ): Promise<ExchangeRate | null> {
    const exchangeRate =
      this.exchangeRates.find(
        (rate) =>
          rate.currencyFrom === currencyFrom && rate.currencyTo === currencyTo,
      ) || null;

    if (!exchangeRate) {
      const notFoundError = new NotFoundError('Exchange rate not found');
      throw notFoundError;
    }

    return exchangeRate;
  }
}
