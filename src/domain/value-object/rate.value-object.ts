export class Rate {
  constructor(private readonly rate: number) {
    this.validate(rate);
  }

  public value(): number {
    return this.rate;
  }

  private validate(rate: number) {
    if (!rate) {
      throw new Error('investimentRate is required');
    }
    if (rate < 0) {
      throw new Error('investimentRate is positive');
    }
  }
}
