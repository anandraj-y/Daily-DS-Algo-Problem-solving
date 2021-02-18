function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let swapIndex;
        for(let j = i - 1; (currentVal < arr[j] || j >= 0); j--) {
            arr[j+1] = arr[j];
            swapIndex = j;
        }
    }
    return arr;
}

insertionSort([12,3,4,1,2,11]);
//3 12 4 1 2 11