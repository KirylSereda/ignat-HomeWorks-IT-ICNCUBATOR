import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers }
) => {
    const inputClass = error === 'name is require' ? s.error : ''

    return (
        <div>
            <div>
                <input value={name}
                    onChange={(e) => setNameCallback(e)} className={inputClass}
                />
                <button className={s.btn} onClick={addUser}>Add</button>
                <span>{totalUsers}</span>
            </div>
            <div className={inputClass}> {error}</div>
        </div>
    )
}

export default Greeting
