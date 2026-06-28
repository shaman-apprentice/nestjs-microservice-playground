import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { bootstrapServer } from 'kafka-connection';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'tweet-service',
          brokers: [ bootstrapServer ],
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
