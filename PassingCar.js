function solution(A) {
	let pairs = 0;
	letzeroCount = 0;
	for (leti = 0; i < A.length; i++) {
		if (A[i] === 0) {
			zeroCount += 1;
		} else if (A[i] === 1) {
			pairs += zeroCount;
			if (pairs > 1000000000) {
				return -1;
			}
		}
	}
	return pairs;
}
