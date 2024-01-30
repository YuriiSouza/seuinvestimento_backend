import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { SignupModule } from './signup/signup.module';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
    SignupModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
