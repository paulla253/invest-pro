import { TypeOfInvestment } from './type-of-investment.value-object';

describe('TypeOfInvestment - Value Object', () => {
  const valueInvalid = [undefined, 'lci'.repeat(10)];

  it.each(valueInvalid)('shold THROW value if value is %s', (invalid) => {
    expect(() => new TypeOfInvestment(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const type = new TypeOfInvestment('lci');

    expect(type.value()).toBe('LCI');
  });
});
