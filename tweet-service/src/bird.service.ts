import { Inject, Injectable } from "@nestjs/common";
import type { ClientKafkaProxy } from "@nestjs/microservices";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class BirdService {
  constructor(@Inject("TWEET_SERVICE") private tweetClient: ClientKafkaProxy) {}

  @Cron('1/10 * * * * *')
  tweet() {
    console.debug("tweeting happily (and annoying)");
    this.tweetClient.emit("tweet", { data: "shirp shirp" });
  }
}
