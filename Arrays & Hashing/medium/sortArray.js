// 1. Merge Sort

const mergeSort = arr => {
    // Base Case - if the array has less than 2 elements, it's already sorted
    if(arr.length < 2) return arr;

    // Split the array into two halves 
    let middleIndex = Math.floor(arr.length / 2);
    let leftHalf = arr.slice(0, middleIndex);
    let rightHalf = arr.slice(middleIndex);

    // Recursively sort each half
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // Merge the sorted halves back
    return merge(sortedLeftHalf, sortedRightHalf);
}

const merge = (leftArr, rightArr) => {
    let mergedArr = [];
    let leftIndex = 0, rightIndex = 0;

    // Iterate through both arrays adding the smaller elements in the merged array
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add the remaining elements from the left array
    while(leftIndex < leftArr.length) {
        mergedArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    // Add the remaining elements from the right array
    while(rightIndex < rightArr.length) {
        mergedArr.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return mergedArr;
}


// 2. Quick Sort

const quickSort = arr => {
    // Base case: if the array has less than 2 elements then it's already sorted
    if(arr.length < 2) return arr;

    // Choose a pivot
    const pivot = arr[0];

    // Divide the array in 2 parts: Elements <= pivot and Elements > pivot
    const lessThanPivot = [], greaterThanPivot = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= pivot) lessThanPivot.push(arr[i]);
        else greaterThanPivot.push(arr[i]);
    }

    // Recursively sort the partitions
    const sortedLessThanPivot = quickSort(lessThanPivot);
    const sortedGreaterThanPivot = quickSort(greaterThanPivot);

    // Concatenate the sorted partition and the pivot element 
    return sortedLessThanPivot.concat([pivot], sortedGreaterThanPivot);
}