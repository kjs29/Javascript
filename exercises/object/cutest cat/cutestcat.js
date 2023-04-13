function cutestCat(cats) {
    let cutest = -Infinity;
    let i = 0;
  
    while (i < cats.length) {
        const cat = cats[i];
        if (cat.cuteness > cutest) {
            cutest = cat;
        }
        i++;
    }
  
    return cutest;
}
