export enum methodEnum {
    log, info, warn, debug, error
}

export type EnumKeys = keyof typeof methodEnum;

export interface methodEnumInterface {
    log: (...args: any[]) => void,
    warn: (...args: any[]) => void,
}