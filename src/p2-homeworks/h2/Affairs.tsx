import { AffairType, FilterType } from './HW2'
import Affair from "./Affair/Affair";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
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

    const affairsByPriority = (priority: FilterType) => {
        props.setFilter(priority)
    }

    return (
        <div className={s.list} >
            <div >
                {mappedAffairs}
            </div>
            <div className={s.btns}>
                <button className={s.btn} onClick={() => affairsByPriority("all")}>All</button>
                <button className={s.btn} onClick={() => affairsByPriority('high')}>High</button>
                <button className={s.btn} onClick={() => affairsByPriority("middle")}>Middle</button>
                <button className={s.btn} onClick={() => affairsByPriority("low")}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
