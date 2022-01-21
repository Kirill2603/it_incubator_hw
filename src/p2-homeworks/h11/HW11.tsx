import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(12)
    const [value2, setValue2] = useState(100)

    const onChangeValue = (value1: number) => {
        setValue1(value1)
    }

    const onChangeDoubleValue = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            <div >
                {/*should work (должно работать)*/}
                <div>
                    <SuperRange
                        value={value1}
                        onChangeRange={onChangeValue}
                        // сделать так чтоб value1 изменялось
                    />
                    <div>value = {value1}</div>
                </div>

                <div>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleValue}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <div>start value = {value1}</div>
                    <div>   </div>
                    <div>max value = {value2}</div>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
