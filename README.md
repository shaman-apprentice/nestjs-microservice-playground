# Notes

Just quick notes of basic concepts and commands

## Microservices

- [Microservices](https://docs.nestjs.com/microservices/basics)
- Create NestJS microservice `pnpm dlx @nestjs/cli new literary-service` and change bootstrap to call `createMicroservice`.

### Event-based

- Fire event: `@Inject("TWEET_SERVICE") private client: ClientProxy` -> `this.client.emit(pattern, data);`
- Receive event: `@EventPattern(pattern) handleEvent(data)`

### Msg-based

- Send msg: `@Inject("LITERARY_SERVICE") private literaryClient: ClientProxy` -> `this.literaryClient.send(pattern, data)` - returns an RxJs Observable
- Response to msg: `@MessagePattern(pattern) responseToMsg(data)`
