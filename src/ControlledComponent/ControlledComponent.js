import React, {useMemo, useCallback, useState, useEffect, useRef} from "react";
import axios from "axios";

export default function ControlledComponent() {
    const [name, setName] = useState('hello!')
    const [notes, setNotes] = useState('notes')
    const [framework, setFramework] = useState('')
    const handleNameChange = (event) =>{
        setName(event.target.value)
        console.log(name)
    }
    const handleNotesChange = (event) => {
        setNotes(event.target.value)
    }
    const handleFramework = (event) => {
        setFramework(event.target.value)
    }
    function handleSubmit (event) {
        console.log('App', {
            name,
            framework,
            notes
        })
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Uncontrolled</h1>
                <label>
                    Name:<br/>
                    <input type='text' value={name} onChange={handleNameChange}/>
                </label>
                <input type='submit' value='submit'/>
                <label>
                    <br/>
                    Notes:
                    <br/>
                    <textarea value={notes} onChange={handleNotesChange}/>
                </label>
                <label> <br/>
                    My favorite Frameworks
                    <select value={framework} onChange={handleFramework}>
                        <option value='' disabled></option>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>vue</option>
                    </select>
                </label>

            </form>
        </div>
    );
}