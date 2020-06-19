function findDuplicates(ar) {
  const pairs = ar.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      return {
        ...acc,
        [curr]: acc[curr] + 1
      };
    }
    return {
      ...acc,
      [curr]: 1
    };
  }, {});

  console.log(ar, pairs);
}
