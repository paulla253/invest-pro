import DatabaseConfig from '../../../../src/infrastructure/config/database.cofing';
import { DataSource } from 'typeorm';
import { MysqlDataSourceToken } from '../token/app.tokens';

export const databaseProviders = [
  {
    provide: MysqlDataSourceToken,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: DatabaseConfig.HOST,
        username: DatabaseConfig.USER,
        password: DatabaseConfig.PASSWORD,
        port: DatabaseConfig.PORT,
        database: DatabaseConfig.DATABASE,
        migrations: [`${__dirname}/../../../../migration/{.ts,*.js}`],
        migrationsRun: true,
      });
      return dataSource;
    },
  },
];
