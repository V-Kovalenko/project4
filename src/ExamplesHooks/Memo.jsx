import React, {useState, useEffect, useRef, useMemo} from 'react'
import axios from "axios";
import './App.css';

function complexCompute (num) {
    let i = 0
    while( i < 1000000000) i++
    return num * 2
}
function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    const changeColor = () => {
        setColored(prevState => !prevState )
    }
    const styles = useMemo(() => {
        return {
            color: colored? 'black' : 'red'
        }
    }, [colored])
    const computed = useMemo(() => {
        return complexCompute(number)
    },[number])
    useEffect(() => {
        console.log('Style changed')
    },[styles])
    return (
        <div className="App">
            <h1 style={styles}>Вычисляемое значение: {computed}</h1>
            <button onClick={() => {setNumber(prevState => prevState + 1)}}> Добавить </button>
            <button onClick={() => {setNumber(prevState => prevState - 1)}}> Убрать </button>
            <button onClick={changeColor}>Изменить цвет</button>
        </div>
    );
}

export default App;
