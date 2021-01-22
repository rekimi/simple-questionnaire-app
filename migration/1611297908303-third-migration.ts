import {MigrationInterface, QueryRunner} from "typeorm";

export class thirdMigration1611297908303 implements MigrationInterface {
    name = 'thirdMigration1611297908303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venues" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "venue_name" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`CREATE TABLE "questionnaire" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "question" varchar NOT NULL, "score" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "venueId" integer)`);
        await queryRunner.query(`CREATE TABLE "temporary_questionnaire" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "question" varchar NOT NULL, "score" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "venueId" integer, CONSTRAINT "FK_c46b8e382a18565a70677cc8d16" FOREIGN KEY ("venueId") REFERENCES "venues" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_questionnaire"("id", "question", "score", "created_at", "updated_at", "deleted_at", "venueId") SELECT "id", "question", "score", "created_at", "updated_at", "deleted_at", "venueId" FROM "questionnaire"`);
        await queryRunner.query(`DROP TABLE "questionnaire"`);
        await queryRunner.query(`ALTER TABLE "temporary_questionnaire" RENAME TO "questionnaire"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questionnaire" RENAME TO "temporary_questionnaire"`);
        await queryRunner.query(`CREATE TABLE "questionnaire" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "question" varchar NOT NULL, "score" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "venueId" integer)`);
        await queryRunner.query(`INSERT INTO "questionnaire"("id", "question", "score", "created_at", "updated_at", "deleted_at", "venueId") SELECT "id", "question", "score", "created_at", "updated_at", "deleted_at", "venueId" FROM "temporary_questionnaire"`);
        await queryRunner.query(`DROP TABLE "temporary_questionnaire"`);
        await queryRunner.query(`DROP TABLE "questionnaire"`);
        await queryRunner.query(`DROP TABLE "venues"`);
    }

}
