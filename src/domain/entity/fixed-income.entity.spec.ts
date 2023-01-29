import { FixedIncome } from './fixed-income.entity';

describe('Fixed Income - Entity', () => {
  it('shold THROW value if parameter is invalid', () => {
    expect(() => new FixedIncome(invalidValue)).toThrow();
  });

  it('shold CREATE value if parameter is valid', () => {
    const fixedIncome = new FixedIncome(validValue);
    expect(fixedIncome.value()).toEqual(expectedValidValue);
  });
});

const invalidValue = {
  money: -100,
  rate: -0,
  typeOfInvestment: '',
  broker: '',
  institution: '',
  startDate: undefined,
  minDate: undefined,
  endDate: undefined,
};

const validValue = {
  money: 100,
  rate: 10,
  typeOfInvestment: 'LCI',
  broker: 'XXX',
  institution: 'XXX',
  startDate: new Date(2022, 5, 1),
  minDate: new Date(2022, 19, 1),
  endDate: new Date(2022, 12, 1),
};

const expectedValidValue = {
  money: 100,
  rate: 10,
  typeOfInvestment: 'LCI',
  broker: 'XXX',
  institution: 'XXX',
  startDate: 1654052400000,
  minDate: 1690858800000,
  endDate: 1672542000000,
};
