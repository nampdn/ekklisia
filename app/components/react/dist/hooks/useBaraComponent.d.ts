import { Dispatch, SetStateAction } from 'react';
import { Animated } from 'react-native';
declare type ReactSetState<T> = Dispatch<SetStateAction<T>>;
export interface RegisterParams<T> {
    key: string;
    value: T;
    payload?: any;
}
export interface RegisterEventConfig<T> {
    kind: string;
    name?: string;
    data?: any;
    preHook?: (args: T) => void;
    handler?: (args: T) => void;
}
export interface RegisterStateConfig {
    [k: string]: any | string | boolean | null;
}
export interface UseBaraComponentProps {
    componentName: 'string';
}
export declare type RegisterAnimateConfig = {
    [k: string]: Animated.Value;
};
export declare type ReactState<S extends any> = {
    [T in keyof S]: S[T];
};
export declare type ReactAnimation<A extends RegisterAnimateConfig> = {
    [T in keyof A]: A[T];
};
export declare type BaraComponentHookResult = {
    registerEvent: <T>(args: RegisterEventConfig<T>) => (args?: T) => void;
    registerAnimation: (animationConfig: RegisterParams<Animated.Value>) => void;
    registerState: <T>(stateConfig: RegisterParams<ReactSetState<T>>) => ReactSetState<T>;
};
export declare const useBaraComponent: () => BaraComponentHookResult;
export {};
