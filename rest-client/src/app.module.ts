import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MathController } from './math.controller';
import { LiteraryController } from './literary.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3001,
        }
      },
      {
        name: 'LITERARY_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002,
        }
      }
    ])
  ],
  controllers: [
    MathController,
    LiteraryController,
  ],
  providers: [],
})
export class AppModule {}
