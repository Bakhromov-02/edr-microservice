import { ApiHideProperty } from '@nestjs/swagger';
import { Entity, Column, OneToMany } from 'typeorm';

import { Client } from './client.entity';
import { CoreEntity } from './core.entity';

@Entity('employees')
export class Employee extends CoreEntity {
  @Column()
  username!: string; // Foydalanuvchi login nomi

  @Column({ unique: true })
  sId!: string; // Foydalanuvchi unikal SID

  @Column({ nullable: true })
  givenName?: string; // Ismi (AD mavjud bo‘lsa)

  @Column({ nullable: true })
  surname?: string; // Familiyasi (AD mavjud bo‘lsa)

  @Column({ default: false })
  isInDomain!: boolean; // Foydalanuvchi domen a’zosi (AD mavjud bo‘lsa)

  @Column({ default: true })
  isOnline!: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  lastSeen!: Date;

  @ApiHideProperty()
  @OneToMany(() => Client, (client) => client.employee, { onDelete: 'CASCADE', cascade: true })
  client!: Client[];
}