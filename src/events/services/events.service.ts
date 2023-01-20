import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateEventDto,
  UpdateEventDto,
} from '../dto/create-event.dto';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto ) {
    const event = await this.eventRepository.findOne({
    });

    if (event) {
      throw new BadRequestException();
    }

    const createdEvent = await this.eventRepository.create(createEventDto);
    const saveEvent = await this.eventRepository.save(createdEvent);
    return saveEvent;
  }

  async findAll() {
    return this.eventRepository.find();
  }

  async findOne(id: number) {
    return await this.eventRepository.findOne(id);
  }

  async findById(eventId: number) {
    return await this.eventRepository.findOneOrFail(eventId);
  }

  async findByEmail(email: string) {
    return await this.eventRepository.findOneOrFail({
      where: { email },
    });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.preload({
      id,
      ...updateEventDto,
    });
    if (!event) {
      throw new NotFoundException(`Event with id ${id} does not exist`);
    }
    return this.eventRepository.save(event);
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOne(id);

    if (!event) {
      throw new NotFoundException(`Event with id ${id} does not exist`);
    }

    return this.eventRepository.remove(event);
  }

}
