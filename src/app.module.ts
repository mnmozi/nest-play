import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './services/cats.service';
import { RolesGuard } from './guards/roles.guard';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    CatsService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
