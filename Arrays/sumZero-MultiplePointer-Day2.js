function findIndex(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } 
        if( sum < 0 ) {
            left += 1;
        }
        if (sum > 0) {
            right -= 1;
        }
    }

}

findIndex([-6, -4, -2, 0, 1, 3, 4, 6, 18]);