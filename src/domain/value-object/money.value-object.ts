export class Money {
  constructor(private readonly money: number) {
    this.validate(money);
  }

  public value(): number {
    return this.money;
  }

  private validate(money: number) {
    if (!money) {
      throw new Error('value is required');
    }
    if (money < 0) {
      throw new Error('value is number positive');
    }
  }
}
