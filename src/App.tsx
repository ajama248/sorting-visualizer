import { SortingBarHandler } from './components/sortingBars'
import type { operation_history } from './types/sorting_types'
import './App.css'
import { useState } from 'react'
import { bubbleSort } from './algorithms/bubble'
import { useSortingEffects } from './hooks/sortAnimation'
import { generate_random_array } from './utils/utilityfunctions'
import { sortAlgorithmsOptions } from './constants/algorithms'


function App() {
  const initList = [45, 70, 20, 35, 65, 10, 90, 55, 24, 88];

  const [currentSelectedAlgorithm, setCurrentSelectedAlgorithm] = useState(0);

  const [history, setHistory] = useState<operation_history[]>(() =>
    bubbleSort(initList)
  );

  const [unsortedArray, setUnsortedArray] = useState<number[]>(initList);

  const [arraySize, setArraySize] = useState(10);

  function updateSortingArray(newArr: number[]){
    setUnsortedArray(newArr);
    setHistory(bubbleSort(newArr));
  }

  function useDefaultArray(){
    updateSortingArray(initList);
  }

  function createRandomArray(){
    const min = 0;
    const max = 100;

    if(arraySize < 1 || min > max){
      alert("invalid array setup");
      return;
    }
    updateSortingArray(generate_random_array(arraySize, min, max));

  }

  const {Isplaying, currentVersion, currentArray, play, pause, reset, nextOperationStep, comparison, swapps} = useSortingEffects(unsortedArray, history);

  return(
    <main className='app-layout'>
      <header className='application-header'>
        <div>
          <h1>SortViz</h1>
          <p>Sorting Algorithm Visualizer</p>
        </div>
        <span className='algorithm-label'> {sortAlgorithmsOptions[currentSelectedAlgorithm].label} </span>
      </header>

      <section className='visualization'>
        <SortingBarHandler unsortedArray={currentArray} comparison={comparison} swapps={swapps}  />
        <div className='legend'>
              <span>Default</span>
              <span>Compare</span>
              <span>Swap</span>
        </div>
      </section>
      
      <section className='control'>
            <div>
              <label htmlFor='array-size'>Size:</label>
              <span className='size-value'>{arraySize} Elements</span>
            </div>
            
            <input id='array-size'
              type='range'
              min={5}
              max={100}
              step={1}
              value={arraySize}
              onChange={(event) => {setArraySize(Number(event.target.value))}} />

            <div className="slider-labels">
              <span>5</span>
              <span>100</span>
            </div>

          <div className='algorithm-ctrl'>
            <label htmlFor="sorting-algorithm">Sorting Algorithm</label>

            <select
              id="sorting-algorithm"
              value={currentSelectedAlgorithm}
              onChange={(event) => setCurrentSelectedAlgorithm(Number(event.target.value))}
            >
              {sortAlgorithmsOptions.map((s_algorithm, index) => {
                return (<option key={s_algorithm.value} value={index}>
                          {s_algorithm.label}
                        </option>)
              })}

            </select>
          </div>

          <div className='buttons-row'>
            <div className='array-buttons'>
              <button className='btn btn-primary' type='button' onClick={createRandomArray}>Generate Random</button>
              <button className='btn btn-secondary' type='button' onClick={useDefaultArray}>Default</button>
            </div>
            <div className='playback-controls'>
              <button className='btn btn-play' onClick={play} disabled={Isplaying}>Play</button>
              <button className='btn btn-secondary' onClick={pause} disabled={!Isplaying}>Pause</button>
              <button className='btn btn-secondary' onClick={reset}>Reset</button>
              <button className='btn btn-secondary' onClick={nextOperationStep}>Next</button>
            </div>
          </div>
      </section>
    </main>
  );
}

export default App
