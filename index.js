function findMinAndRemoveSorted(arr) {
    return arr.shift()
}

function merge(arr1, arr2){
    const res = []
    while(arr1.length !== 0 && arr2.length !== 0){
      if(arr1[0] < arr2[0]){
        res.push(findMinAndRemoveSorted(arr1))
      } else {
        res.push(findMinAndRemoveSorted(arr2))
      }
    }
    return res.concat(arr1).concat(arr2)
  }

function mergeSort(arr){
    const mid = arr.length/2
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    let sorted;
  
    if(arr.length < 2){
        return arr
    } else {
        sorted = merge(mergeSort(left), mergeSort(right))
    }
    return sorted
  }