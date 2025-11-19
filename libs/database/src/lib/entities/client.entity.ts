import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

import { Device } from './device.entity';
import { CoreEntity } from './core.entity';
import { Employee } from './employee.entity';

@Entity('clients')
export class Client extends CoreEntity {
  // TODO add session info

  @ApiHideProperty()
  @ManyToOne(() => Employee, (employee) => employee.client, { onDelete: 'CASCADE' })
  @JoinColumn()
  employee!: Employee;

  @ApiProperty()
  @ManyToOne(() => Device, (device) => device.client, { onDelete: 'CASCADE' })
  @JoinColumn()
  device!: Device;
}
