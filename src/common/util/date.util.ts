export class DateUtil {
  static isValidDate(dateValid: Date): boolean {
    return dateValid instanceof Date && !isNaN(dateValid.getTime());
  }

  static formatDateYYYYMMDD(date: Date): string {
    if (DateUtil.isValidDate(date)) return date.toISOString().substring(0, 10);

    return '';
  }
}
