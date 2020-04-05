function countingValleys(n, s) {
  const hikes = s.split('').reduce((acc, curr) => {
    return curr === 'U' ? ({
        ...acc,
        altitud: ++acc.altitud,
        valleys: acc.altitud === 0? ++acc.valleys: acc.valleys,
    }) : ({
        ...acc,
        altitud: --acc.altitud,
    })
    
  }, {
      altitud: 0,
      valleys: 0
  })

  console.log(hikes)

}

countingValleys(10, 'DUDDDUUDUU')

