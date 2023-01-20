import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '../../auth/decorators/public.decorator';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import {
  CreateEventDto,
  DefaultEventColumnsResponse,
  UpdateEventDto,
} from '../dto/create-event.dto';
import { EventsService } from '../services/events.service';

@ApiTags('events') // put the name of the controller in swagger
@Controller('events')
@UseGuards(JwtAuthGuard, RolesGuard) //  makes the all routs as private by default
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiOperation({ summary: 'create a event' })
  @ApiResponse({
    status: 201,
    type: DefaultEventColumnsResponse,
  })
  @Public() // makes the endpoint accessible to all
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @ApiOperation({ summary: 'get a event' })
  @ApiResponse({
    status: 201,
    type: DefaultEventColumnsResponse,
  })

  @ApiResponse({
    status: 200,
    isArray: true,
    type: DefaultEventColumnsResponse,
  })
  @ApiBearerAuth('access-token')
  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: 200,
    type: DefaultEventColumnsResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @ApiBearerAuth('access-token')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
