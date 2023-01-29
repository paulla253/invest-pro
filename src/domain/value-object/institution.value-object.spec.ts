import { Institution } from './institution.value-object';

describe('Institution - Value Object', () => {
  const valueInvalid = [undefined, null, ''];

  it.each(valueInvalid)('shold THROW value if parameter %s', (invalid) => {
    expect(() => new Institution(invalid)).toThrow();
  });

  it('shold THROW value if parameter more 150 character', () => {
    expect(() => new Institution('x'.repeat(151))).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const institution = new Institution('Institution Test');
    expect(institution.value()).toBe('INSTITUTION TEST');
  });
});
