export class EnumUtil {
  public static checkValue(entity: any, value: unknown): boolean {
    if (!entity) return false;

    const enumValues = Object.keys(entity).map((k) => entity[k]);
    return enumValues.indexOf(value) >= 0;
  }
}
