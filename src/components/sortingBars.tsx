import type { sorting_history } from "../types/sorting_types";


type sortingBarsType = {
    historyStep: sorting_history;
}

//help function
function createBar(value: number, index: number, historyStep: sorting_history){
    let barClass = ""
    if(historyStep.swapps.includes(index)){
        barClass = "swapps"
    }
    else if(historyStep.comparison.includes(index)){
        barClass = "comparison"
    }

    return (
        <div key={index} className="bar-wrapper">
            <div
            className={`sort-bar ${barClass}`}
            style={{height: `${value}%`}}
            />
            <span className="bar-number">{value}</span>
        </div>
    );

}

export function SortingBarHandler({historyStep}: sortingBarsType){
    return(
        <div className="sort-container">
            {historyStep.sortingList.map((value, index) => createBar(value, index, historyStep))}
        </div>
    )
}