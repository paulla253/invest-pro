import { DateUtil } from '../../common/util/date.util';

export class StartDate {
  constructor(private startDate: Date, dateComparison = new Date()) {
    this.validate(startDate, dateComparison);
  }

  public get value(): string {
    return DateUtil.formatDateYYYYMMDD(this.startDate);
  }

  private validate(startDate: Date, dateComparison: Date) {
    if (!startDate) throw new Error('StartDate is required');
    if (startDate > dateComparison) throw new Error('startDate in the future');
  }
}
