import { Rate } from './rate.value-object';

describe('Rate - Value object', () => {
  const valueInvalid = [undefined, null, NaN, 0, -5];

  it.each(valueInvalid)('shold THROW value if parameter %s', (invalid) => {
    expect(() => new Rate(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const investimentRate = new Rate(100);
    expect(investimentRate.value()).toBe(100);
  });
});
