import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../h5/Routes'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.Error404}>
            <div className={s.numberError}>404</div>
            <div className={s.returnHomePage}> Please , return to the homepage  <NavLink to={PATH.PRE_JUNIOR} className={s.link}>Pre-junior</NavLink></div>
        </div>
    )
}

export default Error404
