import { Module } from "@nestjs/common";
import { MathController } from "./math.controller";

@Module({
  imports: [],
  controllers: [MathController],
  providers: [],
})
export class AppModule {}