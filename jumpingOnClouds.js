function jumpingOnClouds(c) {
  const result = c.reduce((acc, curr, index, arr) => {
    if(curr === 0 && index === 0) {
      return {
        jump: 0,
        lastCloud: curr
      }
    }

    if(curr === 0 && acc.lastCloud === 1) {
      return {
        jump: ++acc.jump,
        lastCloud: curr
      }
    }

    if(curr === 1 && acc.lastCloud === 0) {
      return {
        jump: ++acc.jump,
        lastCloud: curr
      }
    }
  
    return {
      ...acc,
      lastCloud: curr
    }

  }, {
    jump: 0,
    lastCloud: undefined
  })

  console.log(result)

}

jumpingOnClouds([ 0, 0, 1, 0, 0, 0, 0, 1, 0, 0 ])