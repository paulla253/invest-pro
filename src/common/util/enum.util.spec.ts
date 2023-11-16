import { EnumUtil } from './enum.util';

describe('Common - Util - EnumUtil', () => {
  enum EMyEnum {
    TEST1 = '1',
    TEST2 = '2',
  }

  it('should FALSE when passing invalid value', () => {
    const value = EnumUtil.checkValue(EMyEnum, '10');
    expect(value).toBe(false);
  });

  it('should FALSE when passing undefined in entity and value', () => {
    const value = EnumUtil.checkValue(undefined, undefined);
    expect(value).toBe(false);
  });

  it('should FALSE when passing undefined value', () => {
    const value = EnumUtil.checkValue(EMyEnum, undefined);
    expect(value).toBe(false);
  });

  it('should TRUE when passing valid value', () => {
    const value = EnumUtil.checkValue(EMyEnum, '1');
    expect(value).toBe(true);
  });
});
