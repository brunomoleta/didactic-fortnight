import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699457632938 implements MigrationInterface {
    name = 'InitialMigration1699457632938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, "email" character varying(64) NOT NULL, "phoneNumber" character varying(24) NOT NULL, "annual" boolean NOT NULL DEFAULT true, "plan" character varying(200) NOT NULL DEFAULT 'business', "company" character varying(64) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
