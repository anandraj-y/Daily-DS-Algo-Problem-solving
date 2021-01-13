
/**
Steps
    take two array
    check length and type, if not fine return false
    iterate over first and calculate the frequency of first array elements
    iterate over first and calculate the frequency of second array elements
    Now iterate thorugh first object and check if the square of keys of first have same value as of first object value
    In case of any mismatch return false else return true
//Input
[1,2,3,4,2,1] [9,16, 4, 4, 1, 1]
 {
    1: 2,
    2: 2,
    4: 1,
    3: 1
}

{
    1: 2,
    4: 2,
    16: 1,
    9: 1
}

// Output
    true
**/

let same1 = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr1) || (arr1.length !== arr2.length)) {
        return false
    }
    let Obj1 = {};
    let Obj2 = {};
    for(let val of arr1) {
        Obj1[val] = Obj1[val] ? Obj1[val] + 1 : 1;
    }
    for(let val of arr2) {
        Obj2[val] = Obj2[val] ? ++Obj2[val] : 1;
    }
    for(let key in Obj1) {
        let arr2Key = Number(key) ** 2;
        if(Obj1[key] !== Obj2[arr2Key]) {
            return false
        }
    }
    return true
}

same1([1,2,3,1], [1,9,4,1])