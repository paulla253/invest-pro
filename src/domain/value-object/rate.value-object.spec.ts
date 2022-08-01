import { InvestimentRate } from './rate.value-object';

describe('Rate - Value object ', () => {
  const valueInvalid = [undefined, null, NaN, 0];

  it.each(valueInvalid)('shold THROW value if parameter %s', (invalid) => {
    expect(() => new InvestimentRate(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const investimentRate = new InvestimentRate(100);
    expect(investimentRate.value).toBe(100);
  });
});
