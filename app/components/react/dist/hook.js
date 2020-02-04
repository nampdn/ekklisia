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
import { useBaraContext } from './context';
export function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
}
export const useBara = ({ kind = 'bara-component', name = '', handlers = [], }) => {
    const context = useBaraContext();
    function mapProps(props) {
        const { data } = props;
        const proxyProps = {};
        if (handlers && handlers.length > 0)
            for (const propName of handlers) {
                if (typeof propName !== 'string')
                    continue;
                const prop = (...args) => {
                    let overrideEventArgs = null;
                    if (propName in props && props[propName] !== undefined) {
                        overrideEventArgs = props[propName](...args);
                    }
                    if (context) {
                        context.event.emit('component-event', {
                            kind,
                            name,
                            propName,
                            data,
                            args: overrideEventArgs !== null ? overrideEventArgs : args,
                        });
                    }
                };
                proxyProps[propName] = prop;
            }
        return proxyProps;
    }
    const getProps = (props = {}) => (Object.assign({ kind,
        name,
        handlers }, mapProps(props)));
    function getBaraStateAndHelpers() {
        return { getProps, context };
    }
    return getBaraStateAndHelpers();
};
export const BaraComponent = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return unwrapArray(children)(useBara(props));
};
