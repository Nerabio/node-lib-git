import { Bot, Context, } from "grammy";
import EventEmitter from "node:events";

export interface SetUrlEvent {
  type: 'set_url';
  url: string;
}

export interface BotStartEvent {
  type: 'bot-start';
}

export type DomainEvent = BotStartEvent | SetUrlEvent;

export type DomainEventType = DomainEvent['type'];

export type DomainEventData<T extends DomainEventType = DomainEventType> = Extract<
  DomainEvent,
  {
    type: T;
  }
>;

export type DomainEventPayload<T extends DomainEventType = DomainEventType> = Omit<DomainEventData<T>, 'type'>;
//  announce<T extends DomainEvent>(event: T, context?: DomainEventsContext<T['type']>): void {
export class TelegramBot {
  protected bot: Bot<Context>;
  protected eventBus: EventEmitter;

  constructor(config: {telegramBotToken: string}, eventBus: EventEmitter){
    this.bot = new Bot(config.telegramBotToken);
    this.eventBus = eventBus;
  }

  public async sendMessage(chat_id: number, msg: string): Promise<void> {
    await this.bot.api.sendMessage(chat_id, msg);
  }

  public async startBot(): Promise<void> {


    //this.bot.on("message", (ctx) => ctx.reply("Hi there!"));
    this.bot.command("url", async (ctx) => {
      // `item` will be "apple pie" if a user sends "/add apple pie".
      const url = ctx.match;
      this.eventBus.emit('set_url', url);
      return ctx.reply("I take the URL for processing")
    });

    this.bot.start();
  }
}