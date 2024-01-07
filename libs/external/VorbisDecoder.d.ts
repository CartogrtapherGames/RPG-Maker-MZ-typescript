
declare class VorbisDecoder {
    
    constructor(context: AudioContext, callback: Function, callbak2: Function);
    destroy(): void;
    send(arrayBuffer: ArrayBuffer, loaded: boolean): void;
}