import { Controller, Get, Put, Post, Param, Body, Delete } from '@nestjs/common';
import { VenuesService } from './venues.service'; 
import { Venue } from 'src/models/venue.entity';

@Controller('venues')
export class VenuesController {
  constructor(
    private venueService: VenuesService,
  ){}

  @Post('')
  async create(@Body() venue: Venue): Promise<Venue> {
    return this.venueService.createOrSave(venue);
  }

  @Get('')
  async findAll(): Promise<Venue[]> {
    return this.venueService.findAll();
  }

  @Get('/find')
  async findLike(@Body() find: any): Promise<Venue[]> {
    return this.venueService.findLike(find);
  }

  @Get(':id')
  async findOne(@Param('id') id:string): Promise<Venue> {
    return this.venueService.findOne(id)
  }

  @Put('')
  async update(@Body() venue: Venue): Promise<Venue> {
    return this.venueService.createOrSave(venue);
  }

  @Delete('')
  async remove(@Body() venue: Venue): Promise<Boolean> {
    const deleted = await this.venueService.remove(venue);
    return deleted.raw.affected > 0;
  }
}
