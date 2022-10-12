import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import axios from "axios";
import './App.css';
import ItemsList from "./ItemsList";


function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)
    const styles = {
        color: colored? 'black' : 'red'
    }
    const generateItemsFromApi = useCallback((itemIndex) => {
        return new Array(count).fill('').map((it,index) => `Элемент ${index + itemIndex}`)
    }, [count])


    return (
        <div className="App">
            <h1 style={styles}>Вычисляемое значение: {count}</h1>
            <button onClick={() => {setCount(prevState => prevState + 1)}}> Добавить </button>
            <button onClick={() => {setColored(prevState => !prevState)}}> Цвет </button>
            <ItemsList  getItems={generateItemsFromApi}/>
        </div>
    );
}

export default App;
