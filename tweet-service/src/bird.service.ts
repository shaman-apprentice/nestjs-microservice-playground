import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class BirdService {
  constructor(@Inject("TWEET_SERVICE") private tweetClient: ClientProxy) {}

  @Cron('1/10 * * * * *')
  tweet() {
    console.debug("tweeting happily (and annoying)");
    // Note, that consumer owns port of client
    this.tweetClient.emit("tweet", { data: "shirp shirp" });
  }
}
