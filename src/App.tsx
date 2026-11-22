import { SortingBarHandler } from './components/sortingBars'
import type { sorting_history } from './types/sorting_types'
import './App.css'
import { useState } from 'react'
import { bubbleSort } from './algorithms/bubble'


function App() {
  const initList = [45, 70, 20, 35, 65, 10, 90];

  const [history, setHistory] = useState<sorting_history[]>(() =>
    bubbleSort(initList)
  );

  const [currentVersion, setVersion] = useState(0);

  function nextIteration(){
    setVersion((previous) =>
      Math.min(previous+1, history.length-1));
  }

  const diplayedHist = history[currentVersion]

  return(
    <main>
      <h1>Sorting Visualizer</h1>

      <SortingBarHandler historyStep={diplayedHist} />
      <button onClick={nextIteration}>Next</button>
    </main>
  );
}

export default App
