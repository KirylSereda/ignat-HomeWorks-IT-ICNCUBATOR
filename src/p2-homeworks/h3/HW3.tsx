import { useState } from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: any) => {
        setUsers([...users, { _id: v1(), name: name }])

    }

    return (
        <div  >
            <hr />
            Homeworks 3
            <hr />
            <GreetingContainer users={users} addUserCallback={addUserCallback} />
        </div>

    )
}

export default HW3