import React, {useState} from 'react'
import './App.css';

const calculateInitialValue = () => {
    console.log('test')
    return Math.trunc(Math.random() * 12)
}

function App() {
    // const [counter, setCounter] = useState(0)
    const [counter, setCounter] = useState(() => {
        return calculateInitialValue()
    })
    const increment = () => {
        // setCounter(counter + 1)
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
        setCounter((prevCounter) => prevCounter + 1)
    }
    const decrement = () => {
        setCounter(Math.max(0, counter - 1))
    }

    const [state, setState] = useState({
        title: 'Счетик',
        data: Date.now(),
        city: 'Moscow'
    })
    const updateTitle = () => {
        setState((prevState) => {
            return {
                ...prevState,
                title: 'Новое значение'
            }
        })
    }

    return (
        <div className="App">
            <h1>Счетик {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Добавить</button>
            <button onClick={decrement}>Убрать</button>
            <button onClick={updateTitle}>Изменить название</button>
            <pre>{JSON.stringify(state, 'null', 2)}</pre>

        </div>
    );
}

export default App;
