import './ColorBox.css'
import { useState } from 'react'

function randomChoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors))
    const changeColor = () => {
        setColor(randomChoice(colors))
    }
    return (
        <div 
            className='ColorBox' 
            style={{backgroundColor: color}} 
            onClick={changeColor}
        ></div>
    )
}