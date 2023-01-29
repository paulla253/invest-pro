export class TypeOfInvestment {
  constructor(private readonly typeOfInvestment: string) {
    this.validate(typeOfInvestment);
  }

  public value(): string {
    return this.typeOfInvestment.toUpperCase();
  }

  private validate(typeOfInvestment: string) {
    const MAX_CHARACTER = 20;

    if (!typeOfInvestment) {
      throw new Error('typeOfInvestment is requeried');
    }
    if (typeOfInvestment.length > MAX_CHARACTER) {
      throw new Error('typeOfInvestment is length max ' + MAX_CHARACTER);
    }
  }
}
