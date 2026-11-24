import type { operation_history } from "../types/sorting_types";


type sortingBarsType = {
    unsortedArray: number[];
    comparison: number[];
    swapps: number[];
}

//help function
function createBar(value: number, index: number, comparison: number[], swapps: number[]){
    let barClass = ""
    if(swapps.includes(index)){
        barClass = "swapps"
    }
    else if(comparison.includes(index)){
        barClass = "comparison"
    }

    return (
        <div key={index} className="bar-wrapper">
            <div
            className={`sort-bar ${barClass}`}
            style={{height: `${value}%`}}
            />
        </div>
    );

}

export function SortingBarHandler({unsortedArray, comparison, swapps}: sortingBarsType){

    const arraySize = unsortedArray.length;
    let gap = 4;

    if(arraySize >= 100){
        gap = 0;
    }
    else if(arraySize > 50){
        gap = 1;
    }
    return(
        <div className="sort-container"
            style={{gap: `${gap}px`}}>
            {unsortedArray.map((value, index) => createBar(value, index, comparison, swapps))}
        </div>
    )
}