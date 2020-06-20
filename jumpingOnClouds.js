function jumpingOnClouds(c) {
  let jumps = 0;
  let index = 0;

  while (index < c.length - 1) {
    if (index === c.length || c[index + 2] === 1) {
      index += 1;
      jumps += 1;
    } else {
      index += 2;
      jumps += 1;
    }
  }

  return jumps;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
