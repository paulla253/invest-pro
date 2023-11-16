import { Broker } from '../value-object/broker.value-object';
import { EndDate } from '../value-object/end-date.value-object';
import { Index } from '../value-object/index.value-object';
import { Institution } from '../value-object/institution.value-object';
import { MinDate } from '../value-object/min-date.value-object';
import { Money } from '../value-object/money.value-object';
import { Rate } from '../value-object/rate.value-object';
import { StartDate } from '../value-object/start-date.value-object';
import { TypeOfInvestment } from '../value-object/type-of-investment.value-object';

export class FixedIncome {
  private _money: Money;
  private _rate: Rate;
  private _typeOfInvestment: TypeOfInvestment;
  private _broker: Broker;
  private _institution: Institution;
  private _startDate: StartDate;
  private _minDate: MinDate;
  private _endDate: EndDate;
  private _index: Index;

  constructor(payload: TPayloadFixedIncome) {
    this._money = new Money(payload.money);
    this._rate = new Rate(payload.rate);
    this._typeOfInvestment = new TypeOfInvestment(payload.typeOfInvestment);
    this._broker = new Broker(payload.broker);
    this._institution = new Institution(payload.institution);
    this._startDate = new StartDate(payload.startDate);
    this._endDate = new EndDate(payload.endDate);
    this._minDate = new MinDate(payload.minDate);
    this._index = new Index(payload.index);
  }

  public value(): TFixedIncome {
    return {
      money: this._money.value,
      rate: this._rate.value,
      typeOfInvestment: this._typeOfInvestment.value,
      broker: this._broker.value,
      institution: this._institution.value,
      startDate: this._startDate.value,
      minDate: this._minDate.value,
      endDate: this._endDate.value,
    };
  }

  public get money(): number {
    return this._money.value;
  }

  public get rate(): number {
    return this._rate.value;
  }

  public get typeOfInvestment(): string {
    return this._typeOfInvestment.value;
  }

  public get broker(): string {
    return this._broker.value;
  }

  public get institution(): string {
    return this._institution.value;
  }

  public get startDate(): string {
    return this._startDate.value;
  }

  public get minDate(): string {
    return this._minDate.value;
  }

  public get endDate(): string {
    return this._endDate.value;
  }

  public get index(): string {
    return this._index.value;
  }
}

export type TPayloadFixedIncome = {
  money: number;
  rate: number;
  typeOfInvestment: string;
  broker: string;
  institution: string;
  index: string;
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
  startDate: string;
  minDate: string;
  endDate: string;
};
