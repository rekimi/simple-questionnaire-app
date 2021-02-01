import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, UpdateResult } from 'typeorm';
import { Venue } from 'src/models/venue.entity';

@Injectable()
export class VenuesService {
  constructor(@InjectRepository(Venue) private venueRepo: Repository<Venue>){}

  findAll(): Promise<Venue[]> {
    return this.venueRepo.find();
  }

  findOne(id: string): Promise<Venue> {
    return this.venueRepo.findOne(id);
  }

  findLike(filter: any): Promise<Venue[]> {
    let search = [];

    if (filter.searchText !== undefined) {
      search.push({ venue_name: Like(`%${filter.searchText}`)});
    }

    return this.venueRepo.find({where: search});
  }

  createOrSave(venue: Venue): Promise<Venue> {
    return this.venueRepo.save(venue);
  }

  remove(venue: Venue): Promise<UpdateResult> {
    return this.venueRepo.softDelete(venue);
  }
}
