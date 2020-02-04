import React from 'react';
export declare function unwrapArray(arg: any): any;
export declare const useBara: ({ kind, name, handlers, }: any) => {
    getProps: (props?: {}) => {
        kind: any;
        name: any;
        handlers: any;
    };
    context: import("./context").BaraContextState;
};
export interface BaraProps {
    kind: string;
    name?: string;
    data?: any;
}
export interface BaraComponentProps extends BaraProps {
    children?: React.ReactChildren;
    handlers: string[];
}
export declare const BaraComponent: ({ children, ...props }: BaraComponentProps) => React.FunctionComponent<{}>;
