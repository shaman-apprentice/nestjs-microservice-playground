import { Controller, Get, Inject, OnModuleInit } from "@nestjs/common";
import type { ClientKafkaProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller("math")
export class MathController implements OnModuleInit {
  constructor(@Inject("KAFKA") private kafkaClient: ClientKafkaProxy) {}

  onModuleInit() {
    this.kafkaClient.subscribeToResponseOf("get.sum");
  }

  @Get("sum")
  getSum(): Observable<number> {
    const payload = [ 1, 2, 3 ];
    return this.kafkaClient.send("get.sum", payload);
  }
}