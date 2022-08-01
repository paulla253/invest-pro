import { Type } from './type.value-object';

describe('Type - Value Object ', () => {
  const valueInvalid = [undefined, null, '', 'x'.repeat(21)];

  it.each(valueInvalid)('shold THROW value if value is %s', (invalid) => {
    expect(() => new Type(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const type = new Type('lci');
    expect(type.value).toBe('LCI');
  });
});
