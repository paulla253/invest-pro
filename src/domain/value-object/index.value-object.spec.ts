import { EIndexer } from '../enum/indexer.enum';
import { Index } from './index.value-object';

describe('Index - Value Object', () => {
  const valueInvalid = [undefined, null, ''];

  it.each(valueInvalid)('should THROW value if value is %s', (invalid) => {
    expect(() => new Index(invalid)).toThrow();
  });

  it('should CREATED value if parameter is CDI', () => {
    const type = new Index(EIndexer.CDI);

    expect(type.value).toBe('1');
  });

  it('should CREATED value if parameter is IPCA', () => {
    const type = new Index(EIndexer.IPCA);

    expect(type.value).toBe('2');
  });

  it('should CREATED value if parameter is PRE', () => {
    const type = new Index(EIndexer.PRE);

    expect(type.value).toBe('3');
  });
});
