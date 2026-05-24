import { Module } from "@nestjs/common";
import { PoemController } from "./poem.controller";
import { PoemService } from "./poem.service";

@Module({
  imports: [],
  controllers: [PoemController],
  providers: [PoemService],
})
export class PoemModule {}