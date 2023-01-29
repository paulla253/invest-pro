import { Broker } from '../value-object/broker.value-object';
import { EndDate } from '../value-object/end-date.value-object';
import { Institution } from '../value-object/institution.value-object';
import { MinDate } from '../value-object/min-date.value-object';
import { Money } from '../value-object/money.value-object';
import { Rate } from '../value-object/rate.value-object';
import { StartDate } from '../value-object/start-date.value-object';
import { TypeOfInvestment } from '../value-object/type-of-investment.value-object';

export class FixedIncome {
  private money: Money;
  private rate: Rate;
  private typeOfInvestment: TypeOfInvestment;
  private broker: Broker;
  private institution: Institution;
  private startDate: StartDate;
  private minDate: MinDate;
  private endDate: EndDate;

  constructor(payload: TPayloadFixedIncome) {
    this.money = new Money(payload.money);
    this.rate = new Rate(payload.rate);
    this.typeOfInvestment = new TypeOfInvestment(payload.typeOfInvestment);
    this.broker = new Broker(payload.broker);
    this.institution = new Institution(payload.institution);
    this.startDate = new StartDate(payload.startDate);
    this.endDate = new EndDate(payload.endDate);
    this.minDate = new MinDate(payload.minDate);
  }

  public value(): TFixedIncome {
    return {
      money: this.money.value(),
      rate: this.rate.value(),
      typeOfInvestment: this.typeOfInvestment.value(),
      broker: this.broker.value(),
      institution: this.institution.value(),
      startDate: this.startDate.value(),
      minDate: this.minDate.value(),
      endDate: this.endDate.value(),
    };
  }
}

export type TPayloadFixedIncome = {
  money: number;
  rate: number;
  typeOfInvestment: string;
  broker: string;
  institution: string;
  startDate: Date;
  minDate: Date;
  endDate: Date;
};

export type TFixedIncome = {
  money: number;
  rate: number;
  typeOfInvestment: string;
  broker: string;
  institution: string;
  startDate: number;
  minDate: number;
  endDate: number;
};
