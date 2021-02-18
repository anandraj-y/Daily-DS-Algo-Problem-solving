let insertionSortSelf = (arr) => {
    function swapValues(arr, idx1, idx2) {
      const [splicedVal] = arr.splice(idx1, 1);
      arr.splice(idx2, 0, splicedVal);
    }
  
    for(let i = 1; i < arr.length; i++) {
        console.log('sorted array ---->' ,arr);
        let k = i - 1;
        let swap = false;
        let swapIndex;
        while(arr[i] > arr[k] || k >= 0) {
            if(arr[i] < arr[k]) {
                swapIndex = k;
                swap = true;
            }
            k-=1;
        }
       if(swap) {
           swapValues(arr, i, swapIndex);
       }
    }
    return arr;
  }
  
  insertionSortSelf([12,3,4,1,2,11]);