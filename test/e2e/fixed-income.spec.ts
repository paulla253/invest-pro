import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import FixedIncomeModule from '../../src/infrastructure/module/fixed-income/fixed-income.module';
import { I18nValidationExceptionFilter, I18nValidationPipe } from 'nestjs-i18n';
import { I18nProjectModule } from '../../src/infrastructure/module/i18n.module';

describe('FixedIncomeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [I18nProjectModule, FixedIncomeModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new I18nValidationPipe());
    app.useGlobalFilters(new I18nValidationExceptionFilter({ detailedErrors: false }));

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('/fixed-income/register', () => {
    it('should return status code 400 if invalid payload', async () => {
      const invalidRequest = {
        money: -100.5,
        rate: -12,
        typeOfInvestment: '',
        broker: '',
        institution: '',
        startDate: '16A',
        minDate: '16B',
        endDate: '16C',
      };

      const response = await request(app.getHttpServer()).post('/fixed-income/register').send(invalidRequest);

      expect(response.statusCode).toBe(HttpStatus.BAD_REQUEST);
    });

    it('should return status code 201 if valid payload', async () => {
      const validRequest = {
        money: 100.5,
        rate: 12,
        typeOfInvestment: 'Pos Fixado 30 dias',
        broker: 'banco yxz',
        institution: 'banco yxz',
        startDate: '1692903850047',
        minDate: '1692903850047',
        endDate: '1692903850047',
      };

      const response = await request(app.getHttpServer()).post('/fixed-income/register').send(validRequest);

      expect(response.statusCode).toBe(HttpStatus.CREATED);
    });
  });
});
