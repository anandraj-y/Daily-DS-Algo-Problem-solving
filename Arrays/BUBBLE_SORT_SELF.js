function bubbleSort(arr) {
    const arrayLength = arr.length;
    for( let i = 0; i < arrayLength - 1; i++ ) {
        for( let j = 0; j < arrayLength - 1; j++ ) {
            let temp;
            if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([3,2,1,4,9,6,11,10]);
