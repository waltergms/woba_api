import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableReview1696351655384 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'review',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'time_gmt',
            type: 'datetime',
          },
          {
            name: 'phone',
            type: 'bigint',
          },
          {
            name: 'organization',
            type: 'varchar',
          },
          {
            name: 'olf',
            type: 'varchar',
          },
          {
            name: 'rating',
            type: 'int',
          },
          {
            name: 'numberreview',
            type: 'int',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'countrycode',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'street',
            type: 'varchar',
          },
          {
            name: 'building',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('review');
  }
}
