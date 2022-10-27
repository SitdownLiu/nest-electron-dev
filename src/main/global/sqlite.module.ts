import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

export const SqliteModule = TypeOrmModule.forRoot({
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  type: 'sqlite',
  database: 'data/db',
  autoLoadEntities: true,
  synchronize: true,
});
