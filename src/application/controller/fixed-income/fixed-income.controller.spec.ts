import { Test } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import FixedIncomeModule from '../../../infrastructure/module/fixed-income/fixed-income.module';
import { FixedIncomeController } from './fixed-income.controller';
import { FixedIncomeRequest } from './request/fixed-income.request';

describe('FixedIncome controller', () => {
  let fixedIncomeController: FixedIncomeController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [FixedIncomeModule],
    }).compile();

    fixedIncomeController = moduleRef.get<FixedIncomeController>(FixedIncomeController);

    const app = moduleRef.createNestApplication();
    app.useGlobalPipes(new I18nValidationPipe());
    app.useGlobalFilters(new I18nValidationExceptionFilter({ detailedErrors: false }));

    await app.init();
  });
  describe('insertFixedIncome', () => {
    it('should not throw if valid parameter', async () => {
      const request = createRequest();

      expect(() => fixedIncomeController.insertFixedIncome(request)).not.toThrow();
    });
  });
});

function createRequest(): FixedIncomeRequest {
  const validValue = {
    money: 100.5,
    rate: 12,
    typeOfInvestment: 'Pos Fixado 30 dias',
    broker: 'banco yxz',
    institution: 'banco yxz',
    startDate: '1692903850047',
    minDate: '1692903850047',
    endDate: '1692903850047',
  };

  return plainToInstance(FixedIncomeRequest, validValue);
}
