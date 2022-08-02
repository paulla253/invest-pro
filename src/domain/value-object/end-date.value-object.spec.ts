import { EndDate } from './end-date.value-object';

describe('StartDate - Value Object ', () => {
  const valueInvalid = [null, undefined];

  it.each(valueInvalid)('shold THROW value if parameter is %s', (invalid) => {
    expect(() => new EndDate(invalid)).toThrow();
  });

  it('shold CREATE value if parameter is valid', () => {
    const date = new Date(2022, 8, 1);

    const startDate = new EndDate(date);

    expect(startDate.value).toBe(1662001200000);
  });
});
