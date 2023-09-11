import { Money } from './money.value-object';

describe('Money - Value Object', () => {
  const valueInvalid = [undefined, null, NaN, 0, -5];

  it.each(valueInvalid)('should THROW value if parameter %s', (invalid) => {
    expect(() => new Money(invalid)).toThrow();
  });

  it('should CREATED value if parameter is valid', () => {
    const money = new Money(100);
    expect(money.value).toBe(100);
  });
});
