import {MigrationInterface, QueryRunner} from "typeorm";

export class addEventStart1674240577574 implements MigrationInterface {
    name = 'addEventStart1674240577574'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ADD "event_start" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "event_start"`);
    }

}
