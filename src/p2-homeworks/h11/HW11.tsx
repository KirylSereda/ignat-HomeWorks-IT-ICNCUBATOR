import React, { useState } from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {

    let startMin = 0
    let startMax = 100
    const [min, setMinValue] = useState(startMin)
    const [max, setMaxValue] = useState(startMax)

    return (
        <div>
            Homeworks 11
            <hr />
            <div>
                <span>{min}</span>
                <SuperRange onChangeRange={setMinValue}
                />
            </div>
            <div>
                <SuperDoubleRange
                    startMin={startMin}
                    startMax={startMax}
                    values={[min, max]}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                />
            </div>
            <hr />
        </div>
    )
}

export default HW11
