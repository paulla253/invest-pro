import { MinDate } from './min-date.value-object';

describe('MinDate - Value Object', () => {
  const valueInvalid = [null, undefined];

  it.each(valueInvalid)('should THROW value if parameter is %s', (invalid) => {
    expect(() => new MinDate(invalid)).toThrow();
  });

  it('should CREATE value if parameter is valid', () => {
    const date = new Date(2022, 8, 1);

    const minDate = new MinDate(date);

    expect(minDate.value).toBe('2022-09-01');
  });
});
