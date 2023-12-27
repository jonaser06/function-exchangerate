import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from '../../common/response';
import { FastifyReply } from 'fastify';
import { ExchangeRateService } from 'src/service/application/exchange-rate.service';
@Controller('v1')
export class ExchangeRate extends Response {
  constructor(private readonly exchangeRateService: ExchangeRateService) {
    super();
  }

  @Get('exchange-rate')
  async exchangeRate(
    @Query('amount') amount: number,
    @Query('currencyFrom') currencyFrom: string,
    @Query('currencyTo') currencyTo: string,
    @Res() res: FastifyReply,
  ) {
    const exchangeRate = await this.exchangeRateService.getExchangeRate(
      currencyFrom,
      currencyTo,
    );
    const exchangedAmount = amount * exchangeRate;
    const result = {
      amount,
      exchangedAmount,
      currencyFrom,
      currencyTo,
      exchangeRate,
    };

    res.status(HttpStatus.OK);
    res.send(result);
  }
}
