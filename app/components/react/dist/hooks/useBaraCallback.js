import { useEffect, useCallback } from 'react';
import { useBaraContext } from '../context';
export const useBaraCallback = (type, key, callback, dependencies = []) => {
    const context = useBaraContext();
    const proxiedCallback = useCallback((stateData) => {
        const { stateName, value } = stateData;
        if (stateName === key) {
            callback(value);
        }
    }, dependencies);
    useEffect(() => {
        const stateCallback = context.event.addListener(`component-${type}`, proxiedCallback);
        return () => {
            context.event.removeListener(`component-${type}`, proxiedCallback);
        };
    }, []);
};
