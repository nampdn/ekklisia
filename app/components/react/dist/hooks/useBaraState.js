import { useState, useEffect } from 'react';
import { useBaraContext } from '../context';
export const useBaraState = (key, defaultValue) => {
    const context = useBaraContext();
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        const updateState = (stateData) => {
            const { stateName, value } = stateData;
            if (stateName === key) {
                context.state[stateName] = value;
                setValue(value);
            }
        };
        context.event.addListener('component-state', updateState);
        return () => {
            context.event.removeListener('component-state', updateState);
        };
    }, []);
    return value;
};
