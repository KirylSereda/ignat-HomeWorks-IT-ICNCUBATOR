import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'high' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    { _id: 1, name: 'React', priority: 'high' },
    { _id: 2, name: 'Anime', priority: 'low' },
    { _id: 3, name: 'Games', priority: 'low' },
    { _id: 4, name: 'Work', priority: 'high' },
    { _id: 5, name: 'HTML & CSS', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    return filter === 'all' ? affairs : affairs.filter(affair => affair.priority === filter)

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(affair => affair._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            Homeworks 2
            <hr />
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        </div>
    )
}

export default HW2
