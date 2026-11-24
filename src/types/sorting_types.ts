

export type operation_history = {
    type: "comparison" | "swapps";
    indices: number[];
}

export type sortAlgorithmName = 
| "quick"
| "merge"
| "insertion" 
| "bubble"
| "selection";

export type sortAlgorithm = (
    input: number[]
) => operation_history[];