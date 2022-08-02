export class EndDate {
  constructor(private _value: Date) {
    if (!_value) {
      throw new Error('endDate is required');
    }
  }

  public get value(): number {
    return this._value.getTime();
  }
}
