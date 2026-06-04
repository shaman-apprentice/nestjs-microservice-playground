import { Controller, Injectable } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class BirdWatchService {
  constructor() {
    console.log("hi from BirdWatchService")
  }
  
  @EventPattern("tweet")
  alarmAboutBirds(data: string) {
    console.warn("🚨 heard a bird! ", data);
  }
}
