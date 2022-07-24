import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import s from './SuperDoubleRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (values: [number, number]) => void
    values: [number, number]

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        className,
        values,
        ...restProps
    }
) => {


    return (
        <>
            <input
                type={'range'}
                onChange={() => onChangeRange}
                className={s.thumb_thumb__zindex_3}
                min={1}
                max={100}

            />
            <input
                type={'range'}
                onChange={() => onChangeRange}
                className={`${s.thumb} ${s.thumb__zindex_4}`}
                min={1}
                max={100}
            />
            <div className={s.slider}>
                <div className={s.slider__track}></div>
                <div className={s.slider__range}></div>
                <div className={s.slider__leftvalue}>{values[0]}</div>
                <div className={s.slider__rightvalue}>{values[1]}</div>
            </div>

        </>
    )
}

export default SuperDoubleRange
