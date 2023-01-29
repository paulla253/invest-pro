export class MinDate {
  constructor(private readonly minDate: Date) {
    this.validate(minDate);
  }

  public value(): number {
    return this.minDate.getTime();
  }

  private validate(minDate: Date) {
    if (!minDate) {
      throw new Error('MinDate is required');
    }
  }
}
