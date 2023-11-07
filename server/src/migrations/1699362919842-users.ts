import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1699362919842 implements MigrationInterface {
    name = 'Users1699362919842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(99) NOT NULL, "email" character varying(65) NOT NULL, "phoneNumber" character varying(24) NOT NULL, "annual" boolean NOT NULL DEFAULT true, "createAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
