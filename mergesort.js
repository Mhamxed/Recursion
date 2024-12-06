function mergeSort(array) {
    if (array.length <= 1) {
        return array
    } else {
        let midPoint = Math.floor(array.length / 2)
        let left = mergeSort(array.slice(0, midPoint))
        let right = mergeSort(array.slice(midPoint))
        return merge(left, right)
    }
} 

function merge(left, right) {
    let l = 0
    let r = 0
    let merged = []

    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            merged.push(left[l])
            l++
        } else {
            merged.push(right[r])
            r++
        }
    }
    if (l < left.length) {
        merged.push(left[l])
    } else if (r < right.length) {
        merged.push(right[r])
    }
    return merged
}

const l = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(mergeSort(l))
