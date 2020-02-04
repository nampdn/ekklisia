import { BaraContextState } from './context';
export interface BaraReactContext {
    context: BaraContextState;
}
export interface BaraComponentPayload {
    propName: string;
    kind?: string;
    name?: string;
    args: any[];
}
export interface BaraReactMold {
}
export declare const BARA_REACT = "bara-react";
