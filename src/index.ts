import { Bot, Context, } from "grammy";



export class TelegramBot {
  protected bot: Bot<Context>;

  constructor(config: {telegramBotToken: string}){
    this.bot = new Bot(config.telegramBotToken);
  }

  public async sendMessage(chat_id: number, msg: string): Promise<void> {
    await this.bot.api.sendMessage(chat_id, msg);
  }

  public async startBot(): Promise<void> {


    this.bot.on("message", (ctx) => ctx.reply("Hi there!"));

    this.bot.start();
  }
}