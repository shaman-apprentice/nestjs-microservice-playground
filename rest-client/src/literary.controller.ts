import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Controller("literary")
export class LiteraryController {
  constructor(@Inject("LITERARY_SERVICE") private literaryClient: ClientProxy) {};

  @Get("poem")
  async getPoem(): Promise<string> {
    const pattern = { cmd: "getPoem" };
    return firstValueFrom(this.literaryClient.send(pattern, {}));
  }
}