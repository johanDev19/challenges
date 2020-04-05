function repeatedString(s, n) {
  const lettlers = s.split('');
  const lettlersLength = lettlers.length;
  let readIndex = 0;
  let counting = 1;
  const maxCounting = n;
  const finalString = [];
  console.log(maxCounting - lettlersLength)
  while(counting <= (maxCounting - lettlersLength)) {
    finalString.push(lettlers[readIndex])
    console.log(readIndex)
    readIndex++

    if(readIndex === lettlersLength) {
      readIndex = 0;
    }
    
    counting++
  }

  console.log(finalString.length)
}

repeatedString('aba', 10);