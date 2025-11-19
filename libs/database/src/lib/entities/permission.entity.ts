import { Entity, Column } from 'typeorm';
import { CoreEntity } from './core.entity';

@Entity('permissions')
export class Permission extends CoreEntity {
  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description!: string;

  @Column({ default: false })
  disabled!: boolean;
}
