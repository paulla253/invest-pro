export class StartDate {
  constructor(private startDate: Date, dateComparison = new Date()) {
    this.validate(startDate, dateComparison);
  }

  public value(): number {
    return this.startDate.getTime();
  }

  private validate(startDate: Date, dateComparison: Date) {
    if (!startDate) throw new Error('StartDate is required');
    if (startDate > dateComparison) throw new Error('startDate in the future');
  }
}
