export class EndDate {
  constructor(private readonly endDate: Date) {
    this.validate(endDate);
  }

  public value(): number {
    return this.endDate.getTime();
  }

  private validate(endDate: Date) {
    if (!endDate) {
      throw new Error('endDate is required');
    }
  }
}
