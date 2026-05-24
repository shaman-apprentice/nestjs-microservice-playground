import { Module } from '@nestjs/common';
import { PoemModule } from './poem/poem.module';

@Module({
  imports: [PoemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
