import { useRef, useEffect } from 'react';
import { useBaraContext } from '../context';
export const useBaraAnimation = (key, defaultValue, finder) => {
    if (!finder)
        throw new Error(`Please specify the animation filter because we organize each animation ref into a list.`);
    const context = useBaraContext();
    const animationRef = useRef(defaultValue);
    useEffect(() => {
        if (key in context.animation) {
            const animRef = context.animation[key].find(finder);
            if (animRef) {
                animationRef.current = animRef.value;
            }
        }
    }, []);
    return animationRef.current;
};
