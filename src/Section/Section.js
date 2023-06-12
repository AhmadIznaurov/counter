import React, { useState } from "react";
import d from  './Section.module.css';
import {useCounter} from "../useCounter";


const Section = () => {
    const { count, increment, decrement, reset } = useCounter(0);


    return (
        <div className={d.section}>
            <div className={d.clock}>
            </div>
            <aside className={d.text_zero}><span>{count}</span></aside>
            <div className={d.section_buttons}>
                <button onClick={increment}>Увеличить</button>
                <button onClick={decrement}>Уменьшить</button>
                <button onClick={reset}>Сбросить</button>
            </div>
        </div>
    )
}

export default Section;