import React from "react";


function Tasks (props) {
    const isDay = props.hours < 18;

    return (isDay ? "сейчас день": "сейчас вечер")
}

export default Tasks; 