function printProduct(arr) {
    
    if(arr.length === 0) return 1;
    let product = arr[0] * printProduct(arr.slice(1));
    return product;
}

printProduct([1,2,3,4,5])