import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { bootstrapServer } from 'kafka-connection';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: "rest-client",
        brokers: [ bootstrapServer ],
      },
      consumer: {
        groupId: "rest-client"
      }
    },
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
