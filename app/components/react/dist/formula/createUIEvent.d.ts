import { VirtualActionConfig } from '@barajs/core';
import { Formula } from '@barajs/formula';
export declare type EventFunction<T> = (formulas: Formula[]) => VirtualActionConfig<T>;
export declare type CreateEventParams<E extends object> = {
    [T in keyof E]: string;
};
export declare type BaraEventMap<E extends object> = {
    [T in keyof E]: EventFunction<any>;
};
export declare const createEvent: <T extends object>(eventMap: CreateEventParams<T>) => BaraEventMap<T>;
