//Bruteforce solution
// function calculateMaxSum(arr, num) {
//     let maxSum = 0;
//     for(let i = 0; i < arr.length - num + 1; i++) {
//         let tempSum = 0;
//         for(let j = 0 ; j < num; j++) {
//             tempSum += arr[i+j]; 
//             if(tempSum > maxSum) {
//                 maxSum = tempSum;
//             } 
//         }
//     }
//     return maxSum;
// }

//Optimised
function calculateMaxSum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j-num] + arr[j];
        console.log(tempSum, maxSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

calculateMaxSum([1,2,3,4,3,2,8,9], 2);  