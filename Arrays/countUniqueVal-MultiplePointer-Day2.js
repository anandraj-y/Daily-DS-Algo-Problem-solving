//UNOPTIMISED
// function countUniqueValues(arr) {
//     let firstIndex = 0;
//     let unqiueCount = 1;
//     for(let i = 1; i < arr.length - 1; i++) {
//         if(arr[firstIndex] !== arr[i]) {
//              unqiueCount += 1;
//              firstIndex = i;
//          }
//     }
//     return unqiueCount;
// }


//OPTIMISED
// Solution based on array shifting
function countUniqueValues(arr) {
    if( !(arr instanceof Array) || arr.length === 0) return 0;
    let countPointer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[countPointer] !== arr[i]) {
            countPointer += 1;
            arr[countPointer] = arr[i];
        }
    }
    return countPointer + 1
}

countUniqueValues([1,1,1,2,2,2,3,4,5,6,7,7,7]);