export class Broker {
  private MAX_CHARACTER = 150;
  constructor(private _value: string) {
    if (!_value) {
      throw new Error('broker is requeried');
    }
    if (_value.length > this.MAX_CHARACTER) {
      throw new Error('broker is length max ' + this.MAX_CHARACTER);
    }
  }

  public get value(): string {
    return this._value.toUpperCase();
  }
}
