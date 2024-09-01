import { Bot, Context } from "grammy";
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
export type DomainEventData<T extends DomainEventType = DomainEventType> = Extract<DomainEvent, {
    type: T;
}>;
export type DomainEventPayload<T extends DomainEventType = DomainEventType> = Omit<DomainEventData<T>, 'type'>;
export declare class TelegramBot {
    protected bot: Bot<Context>;
    protected eventBus: EventEmitter;
    constructor(config: {
        telegramBotToken: string;
    }, eventBus: EventEmitter);
    sendMessage(chat_id: number, msg: string): Promise<void>;
    startBot(): Promise<void>;
}
