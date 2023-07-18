import { MigrationInterface, QueryRunner } from 'typeorm';

export class Empresa1688599011409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
        CREATE TABLE empresa (
            codigo int NOT NULL AUTO_INCREMENT,
            nome varchar(100) NOT NULL,
            PRIMARY KEY (codigo)
            ) 
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE empresa `);
  }
}
