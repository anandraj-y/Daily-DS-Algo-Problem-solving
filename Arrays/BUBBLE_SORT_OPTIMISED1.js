function bubbleSort(arr) {
    const arrayLength = arr.length;
    function swapVal(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for( let i = arrayLength - 1; i > 0; i-- ) {
        for( let j = 0; j <= i - 1; j++ ) {
            if(arr[j] > arr[j+1]) {
                swapVal(arr, j, j+1);
            }
        }
    }
    return arr;
}

bubbleSort([3,2,1,4,9,6,11,10]) // [1,2,3,4,6,9,10,11]
