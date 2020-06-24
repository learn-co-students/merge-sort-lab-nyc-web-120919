function findMinAndRemoveSorted(array) {
    let min = array[0]
    let idx;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            idx = i
        }
    }
    array.splice(idx, 1)
    return min
}

function merge(array1, array2) {
    let mergeArray = [];
    while (array1.length != 0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            mergeArray.push(findMinAndRemoveSorted(array1))
        } else {
            mergeArray.push(findMinAndRemoveSorted(array2))
        }
    }
    return mergeArray.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}