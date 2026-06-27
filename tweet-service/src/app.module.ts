import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { bootstrapServer } from 'kafka-connection';

import { BirdService } from './bird.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: "TWEET_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "tweet-service",
            brokers: [ bootstrapServer ],
          },
        },
      },
    ])
  ],
  controllers: [],
  providers: [ BirdService ],
})
export class AppModule {}
