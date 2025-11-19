import { ApiHideProperty } from '@nestjs/swagger';
import { Entity, Column, OneToMany } from 'typeorm';

import { Client } from './client.entity';
import { CoreEntity } from './core.entity';
import { InstalledApps } from './installed-apps.entity';

@Entity('devices')
export class Device extends CoreEntity {
  @Column()
  pcName!: string; // Kompyuter nomi

  @Column()
  hostname!: string; // Domen nomi (yoki hostname)

  @Column()
  mac!: string; // MAC manzili (active adapter MAC addresi)

  @Column()
  ip!: string; // Local IP manzili

  @Column()
  osInfo!: string; // Operatsion tizim haqida ma’lumot

  @Column({ unique: true })
  pcId!: string; // Kompyuter uchun unikal ID

  @Column()
  version!: string; // Agent versiyasi

  @Column({ default: false })
  isRemoved!: boolean; // Qurilma tizimdan o‘chirilgan yoki yo‘q

  @ApiHideProperty()
  @OneToMany(() => Client, (client) => client.device, { onDelete: 'CASCADE', cascade: true })
  client!: Client[];

  @ApiHideProperty()
  @OneToMany(() => InstalledApps, (installedApps) => installedApps.device, { onDelete: 'CASCADE', cascade: true })
  installedApps!: InstalledApps[];
}