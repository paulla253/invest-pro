export class Institution {
  constructor(private readonly institution: string) {
    this.validate(institution);
  }

  public get value(): string {
    return this.institution.toUpperCase();
  }

  private validate(institution: string) {
    const MAX_CHARACTER = 150;

    if (!institution) {
      throw new Error('institution is required');
    }
    if (institution.length > MAX_CHARACTER) {
      throw new Error('institution is length max ' + MAX_CHARACTER);
    }
  }
}
