import React from 'react'
import {AffairType, FilterType} from './HW2'
import Affair from "./Affair";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (priority:FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const affairsByPriority = (priority:FilterType) => {
        props.setFilter(priority)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>affairsByPriority("all")}>All</button>
            <button onClick={()=>affairsByPriority('high')}>High</button>
            <button onClick={()=>affairsByPriority("middle")}>Middle</button>
            <button onClick={()=>affairsByPriority("low")}>Low</button>
        </div>
    )
}

export default Affairs
