import { DateUtil } from '../../common/util/date.util';

export class MinDate {
  constructor(private readonly minDate: Date) {
    this.validate(minDate);
  }

  public get value(): string {
    return DateUtil.formatDateYYYYMMDD(this.minDate);
  }

  private validate(minDate: Date) {
    if (!minDate) throw new Error('MinDate is required');
  }
}
