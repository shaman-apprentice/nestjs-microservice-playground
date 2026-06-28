import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { bootstrapServer } from 'kafka-connection';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: "literary-service",
          brokers: [ bootstrapServer ],
        },
        consumer: {
          groupId: "literary-service",
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
