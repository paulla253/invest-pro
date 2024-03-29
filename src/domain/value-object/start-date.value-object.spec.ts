import { StartDate } from './start-date.value-object';

describe('StartDate - Value Object', () => {
  const valueInvalid = [undefined, null];

  it.each(valueInvalid)('should THROW value if paramter is %s', (invalid) => {
    expect(() => new StartDate(invalid)).toThrow();
  });

  it('should THROW value if parameter is invalid', () => {
    const date = new Date(2022, 10, 10);
    const dateComparison = new Date(2022, 8, 1);
    expect(() => new StartDate(date, dateComparison)).toThrow();
  });

  it('should NOT throw value if parameter is valid', () => {
    const timestamps = new Date().setDate(new Date().getDate() - 1);

    expect(() => new StartDate(new Date(timestamps))).not.toThrow();
  });

  it('should CREATE value if parameter is valid', () => {
    const date = new Date(2022, 8, 1);
    const dateComparison = new Date(2022, 10, 10);

    const startDate = new StartDate(date, dateComparison);

    expect(startDate.value).toBe('2022-09-01');
  });
});
