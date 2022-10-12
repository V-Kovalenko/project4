import React from 'react'
import {useAlert} from "./Alert/AlertContext";


export default function Main () {
    const {toggle} = useAlert()
    return (
        <div>
            <h1>Hello world!</h1>
            <button onClick={toggle}>показать алерт</button>
        </div>

    )
}