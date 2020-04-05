function sockMerchant(n, ar) {
  const b = ar.sort();
  const pairFounded = [];
 
  const pairs = b.reduce((acc, curr, index, arr) => {
    if(acc.includes(curr)) {
      pairFounded.push(curr)
    }
    return [...acc, curr]
  }, [])
  

  console.log(pairs, pairFounded)

}

sockMerchant(9, [10, 10, 2, 4, 3, 5, 7, 4, 2])