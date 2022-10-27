import { JwtTokenModule } from './global/jwt.module';
import { Auth } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SqliteModule } from './global/sqlite.module';
import { WinService } from './services/win.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [GlobalModule, JwtTokenModule, SqliteModule, TypeOrmModule.forFeature([Auth])],
  controllers: [AppController],
  providers: [AppService, WinService],
})
export class AppModule {}
