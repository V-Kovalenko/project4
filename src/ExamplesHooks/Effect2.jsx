import React, {useState, useEffect} from 'react'
import axios from "axios";
import './App.css';
// https://jsonplaceholder.typicode.com

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x:0, y:0
    })
    const apiClient = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })
    apiClient.interceptors.response.use(response => response.data)

    useEffect(() => {
        apiClient.get(`${type}`)
            .then(it => setData(it))
        return () => {
            console.log('clean type')
        }
    },[type])
    const changeTypeUsers = () =>{
        setType('users')
    }
    const changeTypePosts = () => {
        setType('posts')
    }
    const changeTypeTodos = () => {
        setType('todos')
    }
    const mouseMove = (event) => {
        setPos(
            {
                x: event.clientX,
                y: event.clientY
            }
        )
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    },[pos])

    return (
        <div className="App">
            <h1>Resurs: {type}</h1>
            <button onClick={changeTypeUsers}>User</button>
            <button onClick={changeTypePosts}>Post</button>
            <button onClick={changeTypeTodos}>Todos</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
