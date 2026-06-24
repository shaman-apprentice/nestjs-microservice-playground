import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class BirdWatchService {

  @EventPattern("tweet")
  alarmAboutBirds(data: string) {
    console.warn("🚨 heard a bird! ", data);
  }
}
