import { FixedIncome } from './fixed-income.entity';

describe('Fixed Income - Entity', () => {
  it('should THROW value if parameter is invalid', () => {
    expect(() => new FixedIncome(invalidValue)).toThrow();
  });

  it('should CREATE value if parameter is valid', () => {
    const fixedIncome = new FixedIncome(validValue);
    expect(fixedIncome.money).toEqual(expectedValidValue.money);
    expect(fixedIncome.rate).toEqual(expectedValidValue.rate);
    expect(fixedIncome.typeOfInvestment).toEqual(expectedValidValue.typeOfInvestment);
    expect(fixedIncome.broker).toEqual(expectedValidValue.broker);
    expect(fixedIncome.institution).toEqual(expectedValidValue.institution);
    expect(fixedIncome.startDate).toEqual(expectedValidValue.startDate);
    expect(fixedIncome.minDate).toEqual(expectedValidValue.minDate);
    expect(fixedIncome.endDate).toEqual(expectedValidValue.endDate);

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
  startDate: new Date(1654095609000),
  minDate: new Date(1662044409000),
  endDate: new Date(1669906809000),
};

const expectedValidValue = {
  money: 100,
  rate: 10,
  typeOfInvestment: 'LCI',
  broker: 'XXX',
  institution: 'XXX',
  startDate: '2022-06-01',
  minDate: '2022-09-01',
  endDate: '2022-12-01',
};
