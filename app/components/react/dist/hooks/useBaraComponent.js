import { useRef, useCallback } from 'react';
import { useBaraContext } from '../context';
export const useBaraComponent = () => {
    const context = useBaraContext();
    const previousStates = useRef({});
    const createProxySetState = (key, setOriginState, payload) => (value) => {
        if (value !== previousStates.current[key]) {
            previousStates.current[key] = value;
            context.state[key] = value;
            context.event.emit('component-state', {
                stateName: key,
                value,
                payload,
            });
        }
        setOriginState(value);
    };
    const registerEvent = useCallback(({ kind, name, data, preHook, handler }) => (args) => {
        context.event.emit('component-event', {
            kind,
            name,
            propName: name,
            data,
            args: preHook ? preHook(args) : args,
        });
        if (handler) {
            handler(args);
        }
    }, []);
    const registerState = useCallback((stateConfig) => {
        const { key, value: setOriginState, payload } = stateConfig;
        return createProxySetState(key, setOriginState, payload);
    }, []);
    const registerAnimation = useCallback(({ key, value, payload }) => {
        if (!(key in context.animation)) {
            context.animation[key] = [{ value, payload }];
        }
        else {
            context.animation[key].push({ value, payload });
        }
    }, []);
    return { registerEvent, registerState, registerAnimation };
};
