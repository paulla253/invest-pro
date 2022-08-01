import { Institution } from './institution.value-object';

describe('Institution - Value Object ', () => {
  const valueInvalid = [undefined, null, '', 'x'.repeat(151)];

  it.each(valueInvalid)('shold THROW value if parameter is invalid', (invalid) => {
    expect(() => new Institution(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const type = new Institution('Institution Test');
    expect(type.value).toBe('INSTITUTION TEST');
  });
});
