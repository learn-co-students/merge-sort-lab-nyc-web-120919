function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(firstHalf, secondHalf) {
    let sorted = []
    while (firstHalf.length != 0 && secondHalf.length != 0) {
        let firstMin = firstHalf[0]
        let secondMin = secondHalf[0]
        let currentMin
        if(firstMin < secondMin) {
            currentMin = findMinAndRemoveSorted(firstHalf)
        } else {
            currentMin = findMinAndRemoveSorted(secondHalf)
        }
        sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    debugger
    if (array.length < 2) {
        return array;
    } else {
        let half = array.length / 2
        return merge(mergeSort(array.slice(0, half)), mergeSort(array.slice(half)))
    }
}