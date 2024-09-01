import { Bot, Context } from "grammy";
export declare class TelegramBot {
    protected bot: Bot<Context>;
    constructor(config: {
        telegramBotToken: string;
    });
    sendMessage(chat_id: number, msg: string): Promise<void>;
    startBot(): Promise<void>;
}
