import { IFixedIncomeRepository } from '../../common/repository/fixed-income.interface';
import { FixedIncome } from '../../domain/entity/fixed-income.entity';
import { DataSource } from 'typeorm';

export class FixedIncomeTypeORM implements IFixedIncomeRepository {
  constructor(private dataSource: DataSource) {}

  async registerFixedIncome(payload: FixedIncome): Promise<boolean> {
    const codeCompany = await this.getCodeCompany(payload.institution);

    const result = await this.dataSource.query(
      `
                      INSERT INTO carteira
                      (data_inicio, data_vencimento, data_minima, valor, valor_taxa, pk_empresa)
                      VALUES
                      (?,?,?,?,?,?)
     `,
      [payload.minDate, payload.endDate, payload.startDate, payload.money, payload.rate, codeCompany],
    );

    return result.affectedRows > 0;
  }

  private async getCodeCompany(name: string): Promise<string> {
    const code = await this.getCompany(name);

    return code ? code : await this.insertCompany(name);
  }

  private async getCompany(name: string): Promise<string> {
    const resultQuery = await this.dataSource.query(
      `
          SELECT emp.codigo as code
          FROM empresa emp
          WHERE emp.nome = ?         
     `,
      [name],
    );

    return resultQuery[0]?.code ? resultQuery[0].code : null;
  }

  private async insertCompany(name): Promise<string> {
    const result = await this.dataSource.query(
      `
          INSERT INTO empresa
          (nome)
          VALUES
          (?)
     `,
      [name],
    );

    return result.insertId;
  }
}
