export class Money {
  constructor(private readonly money: number) {
    this.validate(money);
  }

  public get value(): number {
    return this.money;
  }

  private validate(money: number) {
    if (!money) {
      throw new Error('value is requeried');
    }
    if (money < 0) {
      throw new Error('value is number positive');
    }
  }
}
