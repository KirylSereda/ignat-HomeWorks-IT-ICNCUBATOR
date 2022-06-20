import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date ? date.toLocaleTimeString() : 'Click start pls'
    const stringDate = date ? date.toLocaleDateString() : 'Click start pls'
    return (
        <div>
            <div
                className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            {show ? (
                <div className={s.date}>
                    {stringDate}
                </div>
            ) : (<h5></h5>)}
            <SuperButton onClick={start}>Start</SuperButton>
            <SuperButton onClick={stop}>Stop</SuperButton>
        </div>
    )
}

export default Clock
