import {
  Entity,
  Column,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import { CoreEntity } from './core.entity';
import { Permission } from './permission.entity';

@Entity('roles')
export class Role extends CoreEntity {
  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @ManyToMany(() => Permission, { eager: true })
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: { name: 'roleId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'permissionId', referencedColumnName: 'id' },
  })
  permissions!: Permission[];
}
