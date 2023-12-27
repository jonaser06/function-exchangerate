import { ExchangeRate } from 'src/service/domain/model/exchange-rate.model';

export interface ExchangeRateRepository {
  getExchangeRate(
    currencyFrom: string,
    currencyTo: string,
  ): Promise<ExchangeRate | null>;
}
