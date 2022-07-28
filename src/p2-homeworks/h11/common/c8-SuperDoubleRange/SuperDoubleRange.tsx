import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useCallback, useEffect, useRef } from 'react'
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    values: [number, number]
    startMin: number
    startMax: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setMinValue,
        setMaxValue,
        values,
        startMin,
        startMax
    }
) => {


    const getPercent = useCallback(
        (value) => Math.round(((value - startMin) / (startMax - startMin)) * 100),
        [startMin, startMax]
    );

    const minInPercents = getPercent(values[0]);
    const maxInPercents = getPercent(values[1]);



    const progress = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (progress.current) {
            progress.current.style.left = `${minInPercents}%`;
            progress.current.style.width = `${maxInPercents - minInPercents}%`;
        }

    }, [values[0]])

    useEffect(() => {
        if (progress.current) {
            progress.current.style.width = `${maxInPercents - minInPercents}%`;
        }
    }, [values[1]])

    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    if (values[0] > values[1]) {
        setMinValue(values[1])
        setMaxValue(values[0])
    }


    return (
        <div className={s.containerSlider}>
            <span>{values[0]} </span>
            <div className={s.slider}>
                <div className={s.progress}
                    ref={progress}
                >
                </div>
                <div className={s.rangeInput}>
                    <input
                        type={'range'}
                        className={s.rangeMin}
                        onChange={(e) => changeMinValueHandler(e)}
                        min={startMin}
                        max={startMax}
                        value={values[0]}
                    ></input>
                    <input
                        type={'range'}
                        className={s.rangeMax}
                        onChange={(e) => changeMaxValueHandler(e)}
                        min={startMin}
                        max={startMax}
                        value={values[1]}
                    ></input>
                </div>

            </div>
            <span>{values[1]} </span>
        </div>
    )
}

{/* <span>{values[0]}</span>
            <input
                type={'range'}
                onChange={() => onChangeRange}
                min={1}
                max={100}

            />
            <input
                type={'range'}
                onChange={() => onChangeRange}
                min={1}
                max={100}
            />
            <span>{values[1]}</span> */}
export default SuperDoubleRange
