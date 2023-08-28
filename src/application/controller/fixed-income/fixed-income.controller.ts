import { Body, Controller, Post } from '@nestjs/common';
import { FixedIncomeRequest } from './request/fixed-income.request';

@Controller('fixed-income')
export class FixedIncomeController {
  constructor() {}

  @Post('register')
  insertFixedIncome(@Body() request: FixedIncomeRequest): string {
    return 'Success';
  }
}
