import { useState, } from 'react';

export const useCounter = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 3);
    };

    const decrement = () => {
        if(count >= 0 ) {
            const newCount = count - 2 < 0 ? 0 : count - 2;
            setCount(newCount);
        }
    };

    const reset = () => {
        setCount(initialValue);
    };

    return { count, increment, decrement, reset };
};
