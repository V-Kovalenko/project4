import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import './App.css';


function App() {
    // const [renderCount, setRenderCount] = useState(0)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')
    useEffect(() => {
        prevValue.current = value
    })

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })
    const focus = () => inputRef.current.focus()


    return (
        <div className="App">
            <h1>Render count: {renderCount.current}</h1>
            <h1>Prev State: {prevValue.current}</h1>
            <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;
