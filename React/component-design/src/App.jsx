
import './App.css'
// import { sum } from './utils';
// import LuckyN from './LuckyN'
import BoxGrid from './BoxGrid';

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every(v => v === dice[0]);
// }

function App() {
  return (
    <>
      <BoxGrid/>
      {/* <LuckyN winCheck={lessThan4} title='Roll less than 4' color={'red'}/>
      <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same number'/> */}
    </>
  )
}

export default App
