import EventEmitter from "node:events";
export declare class Module {
    private bot;
    onInit(config: {
        telegramBotToken: string;
    }, eventBus: EventEmitter): Promise<void>;
    run(): Promise<void>;
    info(): Promise<{
        name: string;
        version: string;
    }>;
    onDestroy(): Promise<void>;
}
