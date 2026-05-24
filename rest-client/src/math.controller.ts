import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Controller("math")
export class MathController {
  constructor(@Inject("MATH_SERVICE") private mathClient: ClientProxy) {}

  // TODO add parameters
  @Get("sum")
  async getSum(): Promise<number> {
    const pattern = { cmd: "sum" };
    const payload = [ 1, 2, 3 ];
    return firstValueFrom(this.mathClient.send(pattern, payload));
  }
}