import { useState } from 'react';
import { getRolls} from './utils';
import Button from './Button';
import './Lucky7.css';

import Dice from './Dice';

export default function LuckyN({ numDice = 2, winCheck, color, title}) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);

    function roll() {
        setDice(getRolls(numDice));
    }

    return (
        <main className='LuckyN'>
            <h1>{title}</h1>
            {isWinner ? <h4>YOU WON!!!</h4> : <h4 style={{color: 'white'}}>...</h4>}
            <Dice dice={dice} color={color}/>
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button clickFunc={roll} label='Re-Roll' color={color}/>
        </main>
    );
}