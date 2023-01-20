import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { EventsController } from './controllers/events.controller';
import { Event } from './entities/event.entity';
import { EventsService } from './services/events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventsController],
  providers: [EventsService, JwtStrategy],
  exports: [EventsService],
})
export class EventsModule {}
