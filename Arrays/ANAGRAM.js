function validAnagram(firstStr, secondStr){
    if(firstStr.length !== secondStr.length) return false;
    let Obj1 = {};
    for(let letter of firstStr) {
        Obj1[letter] = Obj1[letter] ? ++Obj1[letter] : 1;
    }
    for(let letter of secondStr) {
        if(!Obj1[letter]) {
            return false
        } else {
            --Obj1[letter];
        }
    }
    return true;
}

validAnagram('aaz', 'zaa');