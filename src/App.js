import React, {useMemo, useCallback, useState, useEffect, useRef} from "react";
import axios from "axios";
import './App.css'

export default function App() {
    // AUTHORIZATION
    // LOADING
const [state] = useState({})
    const [user, setUser] = useState(0)
    const [um, setum] = useState(0)
    const [test, setTest] = useState([])
    useEffect(() => {
        setTest(1)
    },[])
    return (
        <div className='flex-main'>
           55
            <input style='text'/>
        </div>
    );
}