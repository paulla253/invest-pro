import { Broker } from './broker.value-object';

describe('Broker - Value Object ', () => {
  const valueInvalid = [undefined, null, '', 'x'.repeat(151)];

  it.each(valueInvalid)('shold THROW value if parameter is invalid', (invalid) => {
    expect(() => new Broker(invalid)).toThrow();
  });

  it('shold CREATED value if parameter is valid', () => {
    const type = new Broker('Broker Test');
    expect(type.value).toBe('BROKER TEST');
  });
});
