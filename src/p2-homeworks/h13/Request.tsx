import { ChangeEvent, useState } from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import { RequestsAPI } from "./RequestsAPI"



export const Request = () => {
    let [cheked, setCheked] = useState(false)
    let [status, setStatus] = useState('Click on Reuqest')

    const onChekedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheked(e.currentTarget.checked)

    }
    const onClickHandler = () => {
        RequestsAPI.reuest(cheked)
            .then(res => {
                setStatus(res.data.errorText)
            })
            .catch(error => {
                console.warn(error)
                setStatus(error.response ? error.response.data.errorText : error.message)
            })
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <SuperCheckbox checked={cheked} onChange={(e) => onChekedHandler(e)} />
                <SuperButton onClick={onClickHandler}>Reuqest</SuperButton>
            </div>
            <h4>{status}</h4>
        </>
    )
}