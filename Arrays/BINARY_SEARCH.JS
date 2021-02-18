function binarySearch(inputArr, num){
      let start = 0;
      let middle = inputArr.length % 2 === 0 ? (inputArr.length / 2) : ((inputArr.length - 1) / 2);
      if(inputArr[middle] === num) return middle;
      if(num > inputArr[middle]) {
           return binarySearch(inputArr.slice(middle+1), num)
          
      } else {
          return binarySearch(inputArr.slice(start, middle), num)
      }
    }
    
    binarySearch([1,2,4,5,6,7,8,11], 11);