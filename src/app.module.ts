import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Aaa } from './entity/aaa.entity';
import { Bbb } from './entity/bbb.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature([Aaa, Bbb]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
