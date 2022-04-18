import s from './Affair.module.css'
import { AffairType } from "../HW2";

type AffairPropsType = {

    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.contener}>
            <div className={s.item}>
                <div>{props.affair.name}</div>
                <button className={s.BtnCross} onClick={deleteCallback}></button>
            </div>
        </div>
    )
}

export default Affair
