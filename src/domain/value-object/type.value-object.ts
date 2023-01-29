export class Type {
  constructor(private readonly type: string) {
    this.validate(type);
  }

  public get value(): string {
    return this.type.toUpperCase();
  }

  private validate(type: string) {
    const MAX_CHARACTER = 20;
    
    if (!type) {
      throw new Error('type is requeried');
    }
    if (type.length > MAX_CHARACTER) {
      throw new Error('type is length max ' + MAX_CHARACTER);
    }
  }
}
