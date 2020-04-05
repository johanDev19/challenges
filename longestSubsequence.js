function longestSubsequence(x, y) {
    // Write your code here
    const xyMerged = [...x.split(''), ...y.split('')];
    const arrayOfY = [...new Set(y)];

    // const counter = arrayOfX.reduce((acc, curr) => {
    //   return arrayOfY.includes(curr) ? (acc = acc + 1): acc
    // }, 0);

    // console.log(counter)
    console.log([...new Set(xyMerged)].length)

    // console.log([...new Set(arrayOfX)])

    // console.log(arrayOfX, arrayOfY)
}

longestSubsequence('hackerranks', 'hackers');