import EventEmitter from 'events';
import React from 'react';
import { Animated } from 'react-native';
import { Store } from 'redux';
interface AnimatedRef {
    value: Animated.Value;
    payload: any;
}
declare type AnimationRefList = Array<AnimatedRef>;
export interface BaraContextState {
    bara: any;
    byKind: {
        [k: string]: React.Component<any>[];
    };
    byName: {
        [k: string]: React.Component<any>[];
    };
    event: EventEmitter;
    animation: Record<string, AnimationRefList>;
    state: {
        [k: string]: any;
    };
    otherRefs: any;
}
export declare const context: BaraContextState;
export declare const BaraContext: React.Context<BaraContextState>;
export interface BaraProviderProps {
    children: React.ReactChildren;
    store: Store;
    bara: any;
}
export declare const BaraProvider: ({ children, ...otherRefs }: any) => JSX.Element;
export declare const useBaraContext: () => BaraContextState;
export {};
