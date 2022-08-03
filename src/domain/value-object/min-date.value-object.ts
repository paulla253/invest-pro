export class MinDate {
  constructor(private _value: Date) {
    if (!_value) {
      throw new Error('MinDate is required');
    }
  }

  public get value(): number {
    return this._value.getTime();
  }
}
