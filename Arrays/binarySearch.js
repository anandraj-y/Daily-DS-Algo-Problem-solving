function binarySearch(arr1, num) {
    let left = 0;
    let right = arr1.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        // console.log(left, right, middle);
        if(arr1[middle] === num) return middle;
        if(arr1[middle] < num) {
            left = middle + 1
        } else {
            right = middle - 1;
        }
    console.log(left, right, middle);
    }
    return -1;
}

binarySearch([1,2,3,4], 7);
