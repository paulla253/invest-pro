import { InvestimentRate } from './investment-rate.value-object';

describe('InvestimentRate - Value ', () => {
  const valueInvalid = [undefined, null, NaN, 0];

  it.each(valueInvalid)('shold THROW value if parameter is invalid', (invalid) => {
    expect(() => new InvestimentRate(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const investimentRate = new InvestimentRate(100);
    expect(investimentRate.value).toBe(100);
  });
});
