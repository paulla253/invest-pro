export class InvestimentRate {
  constructor(private readonly _value) {
    if (!_value) {
      throw new Error('investimentRate is requeried');
    }
  }

  public get value(): number {
    return this._value;
  }
}
