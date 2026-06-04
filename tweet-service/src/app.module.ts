import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { BirdService } from './bird.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: "TWEET_SERVICE",
        transport: Transport.TCP,
        options: {
          port: 3004,
        },
      },
    ])
  ],
  controllers: [],
  providers: [BirdService],
})
export class AppModule {}
