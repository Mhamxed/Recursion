function fibs(n) {
    let fibSeq = []
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            const fib = i
            fibSeq.push(fib)
        } else {
            const fib = fibSeq[i - 1] + fibSeq[i - 2]
            fibSeq.push(fib)
        }
    }
    return fibSeq
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    }
    else if (n === 2) {
        return [0,1];
    } else {
        return [...fibsRec(n-1), fibsRec(n-1)[n - 2] + fibsRec(n-1)[n - 3]];
    }   
}