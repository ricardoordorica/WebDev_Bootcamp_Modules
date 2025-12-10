import Box from "./Box";
import { useState } from "react";

export default function BoxGrid({numBoxes = 9}) {
    const [boxes, setBoxes] = useState(Array(numBoxes).fill(false));

    const toggleBox = (i) => setBoxes(oldBoxes => oldBoxes.map((b, idx) => {
            if(idx === i) {return !b;}
            return b;
        }));
    function reset() {setBoxes(Array(numBoxes).fill(false))}

    return (
        <div className="BoxGrid">
            {boxes.map((b, i) => <Box isActive={b} clickFunc={() => toggleBox(i)} key={i}/>)}
            <button onClick={reset}>Reset</button>
        </div>
    );
}