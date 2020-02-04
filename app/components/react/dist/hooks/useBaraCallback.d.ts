export declare type BaraCallbackType = 'state' | 'event' | 'animation';
export declare const useBaraCallback: (type: BaraCallbackType, key: string, callback: (...args: any[]) => void, dependencies?: any[]) => void;
