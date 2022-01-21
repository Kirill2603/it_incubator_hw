import React from 'react'
import {Slider} from "antd";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: [number, number]) => {
        onChangeRange && onChangeRange(e)
    }

    return (
        <>
            <Slider range value={[value[0], value[1]]} onChange={(e) => onChangeCallback(e)}/>
        </>
    )
}

export default SuperDoubleRange
