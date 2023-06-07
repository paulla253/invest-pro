import { get } from 'env-var';

export default class DatabaseConfig {
  public static readonly HOST: string = get('DATABASE_HOST').asString();
  public static readonly USER: string = get('DATABASE_USER').asString();
  public static readonly PASSWORD: string = get('DATABASE_PASSWORD').asString();
  public static readonly DATABASE: string = get('DATABASE_NAME').asString();
  public static readonly PORT: number = get('DATABASE_PORT').asInt();
}
