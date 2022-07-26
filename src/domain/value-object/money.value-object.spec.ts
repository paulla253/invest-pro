import { Money } from './money.value-object';

describe('Money - Value Object ', () => {
  const valueInvalid = [undefined, null, NaN, 0, -5];

  it.each(valueInvalid)('shold THROW value if parameter %s', (invalid) => {
    expect(() => new Money(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const money = new Money(100);
    expect(money.value).toBe(100);
  });
});
