export class Type {
  constructor(private _value: string) {
    if (!_value) {
      throw new Error('type is requeried');
    }
    if (_value.length > 20) {
      throw new Error('type is length max 20');
    }
  }

  public get value(): string {
    return this._value.toUpperCase();
  }
}
