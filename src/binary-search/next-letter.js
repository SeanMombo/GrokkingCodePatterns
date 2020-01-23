/// assume the list is circularly linked. 


const search_next_letter = function(letters, key) {
    let n = letters.length;
     if (key < letters[0] || key > letters[n - 1]) {
      return letters[0];
    }
  
    let l = 0;
    let r = letters.length - 1;
  
    while (l <= r) {
      let mid = Math.floor(l + (r-l)/2);
      let guess = letters[mid];
  
      if (key < guess) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return letters[l % letters.length];
  };
  
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))