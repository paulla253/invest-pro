export class Money {
  constructor(private _value: number) {
    if (!_value) {
      throw new Error('value is requeried');
    }
    if (_value < 0) {
      throw new Error('value is number positive');
    }
  }

  public get value(): number {
    return this._value;
  }
}
