var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import EventEmitter from 'events';
import React, { useContext } from 'react';
const eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(0);
export const context = {
    bara: null,
    byKind: {},
    byName: {},
    event: eventEmitter,
    animation: {},
    state: {},
    otherRefs: {},
};
export const BaraContext = React.createContext(context);
BaraContext.displayName = 'BaraContext';
export const BaraProvider = (_a) => {
    var { children } = _a, otherRefs = __rest(_a, ["children"]);
    context.otherRefs = otherRefs;
    return React.createElement(BaraContext.Provider, { value: context }, children);
};
export const useBaraContext = () => {
    return useContext(BaraContext);
};
