

export function generate_random_array(size: number, max: number, min: number): number[] {
    const array: number[] = []

    for(let i=0; i < size; i++){
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random)
    }

    return array
}