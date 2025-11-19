import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path'

import { typeormOptions } from './typeorm-options';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// export const AppDataSource = new DataSource({
//   ...typeormOptions,
//   // This is required for running migrations directly on .ts files
//   // without having to compile the entire project first
//   // Note: Your environment might require a different setup (e.g., using a ts-node executor)
//   // based on your Nx config.
//   entities: ['libs/database/src/lib/entities/**/*.entity.ts'],
//   migrations: ['libs/database/src/lib/migrations/*.ts'],
//   migrationsTableName: 'typeorm_migrations',
// });


export default new DataSource({
  ...typeormOptions,
  migrationsTableName: 'typeorm_migrations',
});

