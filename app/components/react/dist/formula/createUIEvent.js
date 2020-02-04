import { cond, act, and } from '@barajs/core';
import { p } from '@barajs/formula';
import { whenComponentEmit, kindEq } from '../react';
const createComponentEvent = (kind) => (formulas) => whenComponentEmit(cond(and(kindEq(kind)), act(p(...formulas))));
export const createEvent = (eventMap) => {
    const map = {};
    for (const eventName in eventMap) {
        map[eventName] = createComponentEvent(eventMap[eventName]);
    }
    return map;
};
