import React from 'react'
import style from './component.module.css'

export default function ButtonSite({type, text,oc}) {
    return (
        <button className={style.button+" "+style[type]} onClick={()=>oc()}>
            {text}
        </button>
    )
}
