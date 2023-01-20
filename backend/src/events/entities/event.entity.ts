import { Column, Entity } from 'typeorm';
import { DefaultEntity } from '../../utils/entities/default.entity';

@Entity('events')
export class Event extends DefaultEntity {
  @Column({
    name: "event_name"
  })
  eventName: string;

  @Column()
  phone: string;

  @Column()
  complement: string;

  @Column()
  address: string;

  @Column()
  state: string;

  @Column()
  email: string;

  @Column()
  city: string;

  @Column()
  responsible: string;

  @Column({
    name:"event_start"
  })
  eventStart: Date;

}
