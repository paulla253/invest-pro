export class InvestimentRate {
  constructor(private readonly rate: number) {
    this.validate(rate);
  }

  public get value(): number {
    return this.rate;
  }

  private validate(rate: number) {
    if (!rate) {
      throw new Error('investimentRate is requeried');
    }
  }
}
