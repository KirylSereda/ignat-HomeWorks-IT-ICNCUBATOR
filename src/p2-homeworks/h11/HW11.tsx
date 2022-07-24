import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(1)
    const [value2, setValue2] = useState(100)

    const onChangeRange = ([value1, value2]: Array<number>) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            Homeworks 11
            <hr />
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={setValue1}
                />
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange values={[value1, value2]} onChangeRange={onChangeRange}
                // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            <hr />
        </div>
    )
}

export default HW11
