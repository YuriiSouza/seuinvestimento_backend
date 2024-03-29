import { LoginModule } from './modules/login.module';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
    LoginModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
