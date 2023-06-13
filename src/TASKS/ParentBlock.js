import React from "react";

// Напиши компонент с названием `ParentBlock`, который содержит переменную с любоым числовым значением от 0 до 100.
// Если значение переменной меньше 50, то компонент должен вывести дочерный компонент с названием `Small`, иначе компонент с названием `Large`.


function ParentBlock() {
    let countTo = 100;
    return(
        <div>
            {countTo < 50 ? "Small" : "Large"}
        </div>
    );
}

export default ParentBlock;