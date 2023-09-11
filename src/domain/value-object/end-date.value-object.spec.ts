import { EndDate } from './end-date.value-object';

describe('EndDate - Value Object', () => {
  const valueInvalid = [null, undefined];

  it.each(valueInvalid)('should THROW value if parameter is %s', (invalid) => {
    expect(() => new EndDate(invalid)).toThrow();
  });

  it('should CREATE value if parameter is valid', () => {
    const date = new Date(2022, 8, 1);

    const endDate = new EndDate(date);

    expect(endDate.value).toBe('2022-09-01');
  });
});
