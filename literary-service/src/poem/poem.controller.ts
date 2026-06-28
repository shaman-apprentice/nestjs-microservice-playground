import { Controller } from "@nestjs/common";
import { PoemService } from "./poem.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class PoemController {
  constructor(private poemService: PoemService) {}

  @MessagePattern("get.poem")
  async getPoem(data: {}): Promise<string> {
    return this.poemService.getPoem();
  }
}
