import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsersPlanColumn1699366662632 implements MigrationInterface {
    name = 'UpdateUsersPlanColumn1699366662632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_plan_enum" AS ENUM('starter', 'pro', 'ultimate')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "plan" "public"."users_plan_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "plan"`);
        await queryRunner.query(`DROP TYPE "public"."users_plan_enum"`);
    }

}
