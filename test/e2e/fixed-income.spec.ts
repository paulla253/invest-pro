import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import FixedIncomeModule from '../../src/infrastructure/module/fixed-income/fixed-income.module';

describe('FixedIncomeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [FixedIncomeModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/fixed-income/register', () => {
    it('Post', () => {
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

      return request(app.getHttpServer())
        .post('/fixed-income/register')
        .send(validRequest)
        .expect(201)
        .expect('Success');
    });
  });
});
