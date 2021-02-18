// Create a minIdx 
// Loop through outer array from i=0 to i<length
// Loop through inner loop from j = i, i < length-1
// Swap at the end of inner loop.
// 2,3,1,4,5

function selectionSort(arr) {
    let temp;
    let minIdx;
    function swapValues(arr, idx1, idx2) {
        return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    for(let i = 0; i < arr.length-1; i++) {
        minIdx = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        (i !== minIdx) && swapValues(arr, i, minIdx); // Optimisation so that swapping happens only when minIdx !== i
    }
    return arr;
}
selectionSort([1,2,3,4,5,7,6,8,9,10]);