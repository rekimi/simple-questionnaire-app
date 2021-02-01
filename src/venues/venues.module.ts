import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venue } from 'src/models/venue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venue])],
  providers: [VenuesService],
  controllers: [VenuesController],
  exports: [VenuesService]
})
export class VenuesModule {}
