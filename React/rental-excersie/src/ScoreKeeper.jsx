import { useState } from "react";

export default function ScoreKeeper({ numPlayer=3, target=5 }) {
    const [scores, setScores] = useState(new Array(numPlayer).fill(0))

    const increaseScore = (i) => {
        setScores(oldScores => {
            return oldScores.map((score, idx) => {
                if(idx === i) return score + 1;
                return score;
            });
        });
    };

    const resetScores = () => {
        setScores(new Array(numPlayer).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((s, i) => {
                    return <li key={i}>
                        Player {i + 1}: {s}
                        <button onClick={() => increaseScore(i)}>+ 1</button>
                        {s >= target && 'WINNER!'}
                    </li>
                })}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}