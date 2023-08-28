import { MigrationInterface, QueryRunner } from 'typeorm';

export class Carteira1688644122747 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE carteira (
            codigo int NOT NULL AUTO_INCREMENT,
            data_inicio Date NOT NULL,
            data_vencimento Date NOT NULL,
            data_minima Date NOT NULL,
            valor DECIMAL(14,2) NOT NULL,
            valor_taxa DECIMAL(14,2) NOT NULL,
            pk_empresa INT,
            PRIMARY KEY (codigo),
            FOREIGN KEY (pk_empresa) REFERENCES empresa(codigo)
            ) 
            `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE carteira`);
  }
}
