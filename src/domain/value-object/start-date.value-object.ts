export class StartDate {
  constructor(private _value: Date, dateComparison = new Date()) {
    if (!_value) throw new Error('StartDate is requeried');
    if (_value > dateComparison) throw new Error('startDate in the future');
  }

  public get value(): number {
    return this._value.getTime();
  }
}
