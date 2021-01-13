/**
Que : Given two array's find if the second array has the squares of the elements of the first array. Frequency should be considered.


Steps:
accept two arrays in the function
check length and type of both
Run first loop to loop over first and second loop to loop over the second one
check corresponding value and anytime it's not same return false

 Using indexOf approach : Complexity O(n2)

*/

function same(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr1) || (arr1.length !== arr2.length)) {
        return false
    }
    for( let i = 0; i < arr1.length ; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true
}

// Using for inside for approach : Complexity O(n2)

function same(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr1) || (arr1.length !== arr2.length)) {
        return false
    }
    for( let i = 0; i < arr1.length ; i++) {
        for(let j = 0; j < arr2.length ; j++) {
            if(arr2[j] === arr1[i] ** 2) {
                arr2.splice(j, 1);
            }
        }
    }
    console.log(arr2)
    return arr2.length === 0 ? true : false
}

same([1,2,3,1], [1,9,3,1])
