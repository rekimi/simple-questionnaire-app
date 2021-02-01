import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { VenuesModule } from './venues/venues.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  //there is bug for sqlite when using ormconfig.json
  imports: [TypeOrmModule.forRoot(
{
  "type": "sqlite",
  "database": "db",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "migrations": ["dist/migration/*.js"],
  "cli": {
    "migrationsDir": "migration",
  },
  "synchronize": false
}), VenuesModule, QuestionsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
