import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { FixedIncomeRequest } from './fixed-income.request';

describe('FixedIncome - Request', () => {
  it('should validate request with success', async () => {
    const promise = plainToInstance(FixedIncomeRequest, validValue);

    const errors = await validate(promise);

    expect(errors).toEqual([]);
  });

  it('should validate request with invalid money', async () => {
    const invalidValue = { ...validValue };
    invalidValue.money = -1;

    const request = plainToInstance(FixedIncomeRequest, invalidValue);
    const errors = await validate(request);

    expect(errors[0].constraints.min).not.toBeFalsy();
  });

  it('should validate request with invalid rate', async () => {
    const invalidValue = { ...validValue };
    invalidValue.rate = -1;

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.min).not.toBeFalsy();
  });

  it('should validate request with invalid typeOfInvestment', async () => {
    const invalidValue = { ...validValue };
    invalidValue.typeOfInvestment = '';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNotEmpty).not.toBeFalsy();
  });

  it('should validate request with invalid broker', async () => {
    const invalidValue = { ...validValue };
    invalidValue.broker = '';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNotEmpty).not.toBeFalsy();
  });

  it('should validate request with invalid institution', async () => {
    const invalidValue = { ...validValue };
    invalidValue.institution = '';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNotEmpty).not.toBeFalsy();
  });

  it('should validate request with invalid startDate', async () => {
    const invalidValue = { ...validValue };
    invalidValue.startDate = '16A';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNumberString).not.toBeFalsy();
  });

  it('should validate request with invalid minDate', async () => {
    const invalidValue = { ...validValue };
    invalidValue.minDate = '16B';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNumberString).not.toBeFalsy();
  });

  it('should validate request with invalid endDate', async () => {
    const invalidValue = { ...validValue };
    invalidValue.endDate = '16C';

    const promise = plainToInstance(FixedIncomeRequest, invalidValue);

    const errors = await validate(promise);

    expect(errors[0].constraints.isNumberString).not.toBeFalsy();
  });

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
});
