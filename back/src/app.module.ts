import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    WeatherModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
