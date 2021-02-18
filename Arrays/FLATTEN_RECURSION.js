function flatten(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array) {
            newArr = newArr.concat(flatten(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
 }
 
 flatten([[1],[2],[3]]);