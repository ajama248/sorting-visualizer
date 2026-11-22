import type { sorting_history } from "../types/sorting_types";


export function bubbleSort(input: number[]): sorting_history[] {

    const arr = [...input];
    const arrSize = arr.length;
    const history: sorting_history[] = [];


    for(let i = 0; i < arrSize - 1; i++){
        for(let j = 0; j < arrSize - 1 - i; j++){
            history.push({
                sortingList: [...arr],
                comparison: [j, j+1],
                swapps: []
            });
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

                history.push({
                sortingList: [...arr],
                comparison: [],
                swapps: [j, j+1]
                });
            }
            
        }
    }


    return history
}