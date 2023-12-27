import { Module } from '@nestjs/common';
import { InMemoryExchangeRateRepository } from './repository/exchange-rate.repository';
import { TYPES } from '../../common/types';

@Module({
  imports: [],
  providers: [
    {
      provide: TYPES.IExchangeRateRepository,
      useClass: InMemoryExchangeRateRepository,
    },
  ],
  exports: [
    {
      provide: TYPES.IExchangeRateRepository,
      useClass: InMemoryExchangeRateRepository,
    },
  ],
})
export class ClientsModule {}
