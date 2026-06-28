import { Controller, Get, Inject, OnModuleInit } from "@nestjs/common";
import type { ClientKafkaProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller("literary")
export class LiteraryController implements OnModuleInit {
  constructor(@Inject("KAFKA") private kafkaClient: ClientKafkaProxy) {}
  
  onModuleInit() {
    this.kafkaClient.subscribeToResponseOf("get.poem");
  }
;

  @Get("poem")
  getPoem(): Observable<string> {
    return this.kafkaClient.send("get.poem", {});
  }
}