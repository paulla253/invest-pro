import { DateUtil } from '../../common/util/date.util';

export class EndDate {
  constructor(private readonly endDate: Date) {
    this.validate(endDate);
  }

  public get value(): string {
    return DateUtil.formatDateYYYYMMDD(this.endDate);
  }

  private validate(endDate: Date) {
    if (!endDate) {
      throw new Error('endDate is required');
    }
  }
}
