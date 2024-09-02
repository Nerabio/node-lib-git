import EventEmitter from "node:events";
import { TelegramBot } from "./telegram-bot.class";
const packageInfo = require('../package.json');

export class Module {
  private bot: TelegramBot;

  async onInit(config: {telegramBotToken: string}, eventBus: EventEmitter): Promise<void> {
    this.bot = new TelegramBot(config, eventBus);
  }

  async run(): Promise<void> {
    this.bot.startBot()
  }

  async info(): Promise<{name: string, version: string}> {
    return Promise.resolve({name: packageInfo.name, version: packageInfo.version}); 
  }

  async onDestroy(): Promise<void>  {}
}