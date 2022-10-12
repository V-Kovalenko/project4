import React, {useMemo, useCallback, useState, useEffect, useRef} from "react";
import axios from "axios";

export default function uncontrolled() {
    const notesTextarea = useRef()
    const frameworkSelect = useRef()
    function handleSubmit (event) {
        console.log('App', {
            name
        })
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Uncontrolled</h1>
                <label>
                    Name:<br/>
                    <input ref={nameInput} defaultValue='hello'/>
                </label>
                <input type='submit' value='submit'/>
                <label>
                    <br/>
                    Notes:
                    <br/>
                    <textarea ref={notesTextarea} defaultValue = 'notes'/>
                </label>
                <label> <br/>
                    My favorite Frameworks
                    <select ref={frameworkSelect} defaultValue=''>
                        <option value='disabled'></option>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>vue</option>
                    </select>
                </label>

            </form>
        </div>
    );
}