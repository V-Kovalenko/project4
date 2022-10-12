import React, {useEffect, useMemo, useState} from 'react'

export default function ItemsList ({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const newItems = getItems()
        setItems(newItems)
        console.log('render')
    },[getItems])


    return (
        <ul>
            {items.map((it) => <li key={it}>{it}</li>)}
        </ul>
    )
}