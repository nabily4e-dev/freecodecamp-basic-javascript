function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return []
	} else {
		const numbersRange = rangeOfNumbers(startNum, endNum - 1)
		numbersRange.push(endNum)
		return numbersRange
	}
}
