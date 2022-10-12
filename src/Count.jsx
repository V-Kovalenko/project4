import React, {useContext} from 'react'
import TestUseContext from "./useContext/TestUseContext";
const Count = () => {
  const {count, setCount, ref, color, setColor, colorRef} = useContext(TestUseContext)
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)} >Push me</button>
            <br/>
            <button onClick={() => {ref.current.focus()}}> Focus </button>
            <input type='text' ref={ref}/>
            <br/>
            <button onClick={() => setColor(colorRef.current.style.background = color) }>Change color</button>
            <input ref={colorRef} />
            <br/>
            <button onClick={() => colorRef.current.toggle = setColor(!color)}>Pushhhhh</button>
            <button ref={colorRef}>{color}</button>


        </div>
    )
}
export default Count