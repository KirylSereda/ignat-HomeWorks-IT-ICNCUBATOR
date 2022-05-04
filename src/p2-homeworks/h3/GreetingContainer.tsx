import React, { ChangeEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const inputName = e.currentTarget.value.trim()
        if (inputName.length <= 0) {
            setName(inputName)
            setError('Name is require!')
        } else {
            setName(inputName)
            setError('')
        }

    }
    const addUser = () => {
        alert(`Hello ${name} !`)
        addUserCallback(name)
        setName('')
    }

    const totalUsers = users.length

    return (
        <div style={{ padding: "0px 0px 40px 20px" }}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div >
    )
}

export default GreetingContainer
