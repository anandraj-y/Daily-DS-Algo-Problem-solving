// Helpful in case we have very less swap needed. 
// No need to check till end
// In case there is no swap in the inner loop it means array is sorted.

function bubbleSort(arr) {
    let k = 0;
    const arrayLength = arr.length;
    let noSwap;
    function swapVal(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for( let i = arrayLength - 1; i > 0; i-- ) {
        for( let j = 0; j <= i - 1; j++ ) {
            noSwap = true;
            k++;
            if(arr[j] > arr[j+1]) {
                swapVal(arr, j, j+1);
                noSwap = false;
            }
        }
      if(noSwap) break;
    }
    return {arr, k};
}

bubbleSort([1,2,3,4,6,5,7,8])