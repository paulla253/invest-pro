import { DateUtil } from './date.util';

describe('Common - Util - DateUtil', () => {
  describe('isValidDate ', () => {
    const invalidValue = [undefined, 'aaa', '2022-13-01', '2022-02-35'];

    it.each(invalidValue)('should RETURN false if value is %s', (invalid) => {
      expect(DateUtil.isValidDate(new Date(invalid))).toBe(false);
    });

    it('should RETURN true when value is valid', () => {
      expect(DateUtil.isValidDate(new Date('December 17, 2021 03:24:00'))).toBe(true);
    });
  });

  describe('formatDateYYYYMMDD ', () => {
    const invalidValue = ['2022-13-01'];
    it.each(invalidValue)('should RETURN empty if invalid date', (invalid) => {
      expect(DateUtil.formatDateYYYYMMDD(new Date(invalid))).toBe('');
    });

    const validValue = [
      {
        value: new Date('2022-08-02'),
        expectValue: '2022-08-02',
      },
      {
        value: new Date('2022-08-03 12:41Z'),
        expectValue: '2022-08-03',
      },
    ];

    it.each(validValue)('should FORMAT date when passing value $value', ({ value, expectValue }) => {
      const date = DateUtil.formatDateYYYYMMDD(value);
      expect(date).toBe(expectValue);
    });
  });
});
