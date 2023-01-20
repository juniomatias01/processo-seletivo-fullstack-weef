import {MigrationInterface, QueryRunner} from "typeorm";

export class events1674239932787 implements MigrationInterface {
    name = 'events1674239932787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "events" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "event_name" character varying NOT NULL, "phone" character varying NOT NULL, "complement" character varying NOT NULL, "address" character varying NOT NULL, "state" character varying NOT NULL, "email" character varying NOT NULL, "city" character varying NOT NULL, "responsible" character varying NOT NULL, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "events"`);
    }

}
