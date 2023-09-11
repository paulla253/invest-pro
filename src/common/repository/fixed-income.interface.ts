import { FixedIncome } from '../../domain/entity/fixed-income.entity';

export interface IFixedIncomeRepository {
  registerFixedIncome(payload: FixedIncome): Promise<boolean>;
}
