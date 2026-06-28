import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class MathController {

  @MessagePattern("get.sum")
  sum(data: number[]): number {
    return data.reduce((sum, a) => sum + a, 0);
  }
}
