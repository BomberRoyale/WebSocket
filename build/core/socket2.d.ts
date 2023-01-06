import WebSocket from "ws";
export interface Socket2Act {
    (payload?: any): Promise<void> | void;
}
export interface Socket2ActCB {
    (payload: any, callback: Socket2Act): Promise<void> | void;
}
export interface Socket2Options {
    pingInterval: number;
    pingTimeout: number;
    ping: boolean;
    debug: boolean;
    [key: string]: any;
}
export interface Socket2Wildcard {
    (channel: string, payload?: any, callback?: Socket2Act): void;
}
export default class Socket2 {
    ws: WebSocket;
    id: string;
    private options;
    open: boolean;
    private cbid;
    callbacks: {
        [key: number]: Socket2Act;
    };
    private listeners;
    private wildcners;
    constructor(ws: WebSocket, options?: any);
    setOpen(): void;
    parseMessage(message: WebSocket.Data): any;
    waitopen(): Promise<void>;
    parseInternal(cbid: number, data: any): Promise<void>;
    parseCallback(cbid: number, data: any): void;
    detachCallback(cbid: number): Socket2Act;
    trigger({ channel, cbid, data }: {
        channel: string;
        cbid?: number;
        data?: any;
    }): Promise<void>;
    on(channel: string, action: Socket2ActCB): void;
    wildcard(wilddata: Socket2Wildcard): void;
    emit(channel: string, data: any, callback?: Socket2Act): Promise<void>;
    private tmPing;
    private tmPingWait;
    private tmPingSkip;
    schedulePing(): void;
    stopPinging(): void;
    private logLacenty;
    private sumLatency;
    latency: number;
    registerLatency(latency: number): void;
    ping(callback?: Socket2Act): void;
    deny(reason: string): void;
    retry(delay?: number): void;
    emitback(cbid: number, data: any): void;
    destroy(): void;
    log(...args: any[]): void;
}
