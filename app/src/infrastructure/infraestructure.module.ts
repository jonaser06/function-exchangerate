import { Module } from '@nestjs/common';
import { ExchangeRate } from './controllers/exchange-rate.controller';
import { ApplicationModule } from 'src/service/application/application.module';

@Module({
  controllers: [ExchangeRate],
  imports: [ApplicationModule],
})
export class InfrastructureModule {}
