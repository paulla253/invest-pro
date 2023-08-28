import { Module } from '@nestjs/common';
import { FixedIncomeController } from '../../../application/controller/fixed-income/fixed-income.controller';

@Module({
  providers: [],
  imports: [],
  controllers: [FixedIncomeController],
})
export default class FixedIncomeModule {}
