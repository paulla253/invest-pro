import { StartDate } from './start-date.value-object';

describe('StartDate - Value Object ', () => {
  it('shold THROW value if parameter is invalid', () => {
    const date = new Date(2022, 10, 10);
    const dateComparison = new Date(2022, 8, 1);
    expect(() => new StartDate(date, dateComparison)).toThrow();
  });

  it('shold CREATE value if parameter is valid', () => {
    const date = new Date(2022, 8, 1);
    const dateComparison = new Date(2022, 10, 10);

    const startDate = new StartDate(date, dateComparison);

    expect(startDate.value).toBe(1662001200000);
  });
});
