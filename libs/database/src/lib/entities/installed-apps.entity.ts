import { ApiHideProperty } from '@nestjs/swagger';
import { Entity, Column, Unique, ManyToOne, JoinColumn } from 'typeorm';

import { CoreEntity } from './core.entity';
import { Device } from './device.entity';

// TODO
@Unique(['device', 'name', 'version', 'publisher'])
@Entity('installed_apps')
export class InstalledApps extends CoreEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  version!: string;

  @Column({ nullable: true })
  publisher!: string;

  @ApiHideProperty()
  @ManyToOne(() => Device, (device) => device.installedApps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  device!: Device;
}
