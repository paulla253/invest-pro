import { FixedIncome } from '../../../src/domain/entity/fixed-income.entity';
import DatabaseConfig from '../../../src/infrastructure/config/database.cofing';
import { FixedIncomeTypeORM } from '../../../src/infrastructure/repository/fixed-income-typeorm.repository';
import { DataSource } from 'typeorm';

describe('FixedIncomeTypeORM', () => {
  let dataSource: DataSource;
  let fixedIncomeRepository: FixedIncomeTypeORM;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'mysql',
      host: DatabaseConfig.HOST,
      username: DatabaseConfig.USER,
      password: DatabaseConfig.PASSWORD,
      port: DatabaseConfig.PORT,
      database: DatabaseConfig.DATABASE,
      migrations: [`${__dirname}/../../../migration/{*.ts,*.js}`],
      migrationsRun: true,
    });

    await dataSource.initialize();

    fixedIncomeRepository = new FixedIncomeTypeORM(dataSource);
  });

  afterEach(async () => {
    await dataSource.dropDatabase();
    await dataSource.destroy();
  });

  it('should register fixed income if payload valid and not find company', async () => {
    const fixedIncomeEntity = new FixedIncome(validValue);

    const success = await fixedIncomeRepository.registerFixedIncome(fixedIncomeEntity);

    expect(success).toBeTruthy();
  });

  it('should register fixed income if payload valid and find company', async () => {
    await dataSource.query(` INSERT INTO empresa (nome) VALUES (?)`, [validValue.institution]);

    const fixedIncomeEntity = new FixedIncome(validValue);

    const success = await fixedIncomeRepository.registerFixedIncome(fixedIncomeEntity);

    expect(success).toBeTruthy();
  });
});

const validValue = {
  money: 100,
  rate: 10,
  typeOfInvestment: 'LCI',
  broker: 'XXX',
  institution: 'Teste',
  startDate: new Date(1654095609000),
  minDate: new Date(1662044409000),
  endDate: new Date(1669906809000),
};
