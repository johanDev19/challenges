function sockMerchant(n, ar) {
  const pairsFound = [];
  const usedValue = []

  ar.sort().forEach(element => {
    if(usedValue.includes(element)) {
      if(usedValue.filter(v => (v === element)).length % 2) {
        pairsFound.push(element)
      }
    }

    usedValue.push(element)
  });

  console.log(pairsFound.length)

}

sockMerchant(9, [10, 10, 2, 4, 3, 5, 7, 4, 2])