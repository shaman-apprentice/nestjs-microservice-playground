import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { bootstrapServer } from 'kafka-connection';

import { MathController } from './math.controller';
import { LiteraryController } from './literary.controller';
import { BirdWatchService } from './bird-watch.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'rest-client',
            brokers: [ bootstrapServer ],
          },
          consumer: {
            groupId: 'rest-client',
          },
        },
      },
    ])
  ],
  controllers: [
    MathController,
    LiteraryController,
    BirdWatchService,
  ],
  providers: [],
})
export class AppModule {}
