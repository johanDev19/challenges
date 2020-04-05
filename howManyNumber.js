function sockMerchant(n, ar) {
  const b = ar.sort();
  const pairFounded = [];

  const pairs = b.reduce((acc, curr, index, arr) => {
    if(acc.hasOwnProperty(curr)) {
      return {
        ...acc,
        [curr]: acc[curr] + 1 
      }
    }
    return {
      ...acc,
      [curr]: 1
    }
  }, {})

  console.log(b, pairs)

}

sockMerchant(9, [10, 10, 2, 4, 3, 5, 7, 4, 2])