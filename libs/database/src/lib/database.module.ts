import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeormOptions } from './typeorm-options';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => typeormOptions,
    }),
  ],
})
export class DatabaseModule {}
