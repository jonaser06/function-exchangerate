import { Module } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ClientsModule } from '../clients/clients.module';

@Module({
  imports: [ClientsModule],
  providers: [ExchangeRateService],
  exports: [ExchangeRateService],
})
export class ApplicationModule {}
