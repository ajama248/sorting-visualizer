import type { operation_history } from "../types/sorting_types";


export function bubbleSort(input: number[]): operation_history[] {

    const arr = [...input];
    const arrSize = arr.length;
    const history: operation_history[] = [];


    for(let i = 0; i < arrSize - 1; i++){
        for(let j = 0; j < arrSize - 1 - i; j++){
            history.push({
                type: "comparison",
                indices: [j, j+1]
            });
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

                history.push({
                    type: "swapps",
                    indices: [j, j+1]
                });
            }
            
        }
    }


    return history
}