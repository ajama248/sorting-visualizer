import type { operation_history } from '../types/sorting_types'
import { useState, useEffect } from 'react'

export function useSortingEffects(initial_array: number[], operation_history: operation_history[]){
    const [Isplaying, setIsplaying] = useState(false);
    const [currentVersion, setVersion] = useState(0);

    const [currentArray, setCurrentArray] = useState(() => [...initial_array]);

    const [comparison, setComparison] = useState<number[]>([]);
    const [swapps, setSwapps] = useState<number[]>([]);

    function nextOperationStep(){
        if(currentVersion >= operation_history.length){
            setIsplaying(false);
            return;
        }

        const currentOperation = operation_history[currentVersion];
        const [i,j] = currentOperation.indices;

        if(currentOperation.type == "comparison"){
            setComparison([i,j]);
            setSwapps([]);
        }
        else{

            setCurrentArray((previousArray) => {
                const newArray = [...previousArray];

                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];

                return newArray;
            });

            setComparison([]);
            setSwapps([i,j]);

        }
        setVersion((previous) => previous + 1);
    }

    useEffect(() => {
        if(!Isplaying){
            return;
        }
        if(currentVersion >= operation_history.length){
            setIsplaying(false);
            return;
        }

        const timer = setTimeout(() => {
            nextOperationStep();
        }, 500)

        return () => clearTimeout(timer);
    }, [Isplaying, currentVersion]);



    //update changes to the array    
    useEffect(() => {
        setIsplaying(false);
        setVersion(0);
        setCurrentArray([...initial_array]);
        setComparison([]);
        setSwapps([]);
    }, [initial_array]);

    function play(){
        setIsplaying(true);
    }
    function pause(){
        setIsplaying(false);
    }
    function reset(){
        setIsplaying(false);
        setVersion(0);
        setCurrentArray([...initial_array]);
        setComparison([]);
        setSwapps([]);
    }

    return {Isplaying, currentVersion, currentArray, play, pause, reset, nextOperationStep, comparison, swapps}

}

