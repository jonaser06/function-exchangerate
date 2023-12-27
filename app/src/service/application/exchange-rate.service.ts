import { Inject, Injectable } from '@nestjs/common';
import { ExchangeRateRepository } from '../domain/clients/repository/exchange-rate.interface';
import { TYPES } from '../../common/types';

@Injectable()
export class ExchangeRateService {
  constructor(
    @Inject(TYPES.IExchangeRateRepository)
    private readonly exchangeRateRepository: ExchangeRateRepository,
  ) {}

  async getExchangeRate(
    currencyFrom: string,
    currencyTo: string,
  ): Promise<number> {
    const exchangeRate = await this.exchangeRateRepository.getExchangeRate(
      currencyFrom,
      currencyTo,
    );

    if (!exchangeRate) {
      throw new Error('Exchange rate not found');
    }

    return exchangeRate.rate;
  }
}
