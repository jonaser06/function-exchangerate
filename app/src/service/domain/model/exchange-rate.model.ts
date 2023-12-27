export class ExchangeRate {
  constructor(
    public readonly currencyFrom: string,
    public readonly currencyTo: string,
    public readonly rate: number,
  ) {}
}
