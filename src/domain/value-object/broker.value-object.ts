export class Broker {
  constructor(private readonly broker: string) {
    this.validate(broker);
  }

  public get value(): string {
    return this.broker.toUpperCase();
  }

  private validate(value: string) {
    const MAX_CHARACTER = 150;

    if (!value) {
      throw new Error('broker is required');
    }
    if (value.length > MAX_CHARACTER) {
      throw new Error('broker is length max ' + MAX_CHARACTER);
    }
  }
}
