import { Inject, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { databaseProviders } from './provider/database.provider';
import { MysqlDataSourceToken } from './token/app.tokens';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {
  constructor(@Inject(MysqlDataSourceToken) private dataSource: DataSource) {}

  async onModuleInit() {
    await this.dataSource?.initialize();
  }

  async onModuleDestroy() {
    await this.dataSource?.destroy();
  }
}
