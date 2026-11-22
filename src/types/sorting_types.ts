

export type sorting_history = {
    sortingList: number[];
    comparison: number[];
    swapps: number[];
}

export type sortAlgorithmName = 
| "quick"
| "merge"
| "insertion" 
| "bubble"
| "selection";

export type sortAlgorithm = (
    input: number[]
) => sorting_history[];