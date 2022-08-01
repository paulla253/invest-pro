export class Broker {
  constructor(private _value: string) {
    if (!_value) {
      throw new Error('type is requeried');
    }
    if (_value.length > 150) {
      throw new Error('type is length max 150');
    }
  }

  public get value(): string {
    return this._value.toUpperCase();
  }
}
