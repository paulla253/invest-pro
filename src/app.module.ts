import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import FixedIncomeModule from './infrastructure/module/fixed-income/fixed-income.module';
import { I18nProjectModule } from './infrastructure/module/i18n.module';

@Module({
  imports: [I18nProjectModule, FixedIncomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
