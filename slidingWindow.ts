function maxSubarraySum(arryOfNumbers: Array<number>, numberItemsInWindow: number): number | null {
    let maxSum = 0;
    let tempSum = 0;
    if (arryOfNumbers.length < numberItemsInWindow) return null;
    for (let i = 0; i < numberItemsInWindow; i++) {
      maxSum += arryOfNumbers[i];
    }
    tempSum = maxSum;
    for (let i = numberItemsInWindow; i < arryOfNumbers.length; i++) {
      tempSum = tempSum - arryOfNumbers[i - numberItemsInWindow] + arryOfNumbers[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log({
      test1: maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
  })
  