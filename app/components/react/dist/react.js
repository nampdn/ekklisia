import { portion, flow, popEvent, popSeep } from '@barajs/core';
import { BARA_REACT } from './types';
import { context } from './context';
import * as seep from './seep';
export const BaraReact = portion({
    name: BARA_REACT,
    init: () => {
        return { context };
    },
    whenComponentEmit: flow({
        bootstrap: ({ context: baraContext, next }) => {
            const { context } = baraContext;
            context.event.on('component-event', (payload) => {
                next(payload);
            });
        },
        seep,
    }),
    whenComponentStateChange: flow({
        bootstrap: ({ context: baraContext, next }) => {
            const { context } = baraContext;
            context.event.on('component-state', (payload) => {
                next(payload);
            });
        },
        seep,
    }),
});
const { whenComponentEmit, whenComponentStateChange } = popEvent(BaraReact);
const { nameEq, kindEq, propNameEq } = popSeep(whenComponentEmit);
export { whenComponentEmit, whenComponentStateChange, nameEq, kindEq, propNameEq, };
