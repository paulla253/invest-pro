import { Broker } from './broker.value-object';

describe('Broker - Value Object', () => {
  const valueInvalid = [undefined, null, ''];

  it.each(valueInvalid)('shold THROW value if parameter is %s', (invalid) => {
    expect(() => new Broker(invalid)).toThrow();
  });

  it('shold THROW value if parameter more 150 character', () => {
    expect(() => new Broker('x'.repeat(151))).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const type = new Broker('Broker Test');
    expect(type.value).toBe('BROKER TEST');
  });
});
