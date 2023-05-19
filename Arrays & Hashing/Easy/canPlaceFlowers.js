// 1. Brute Force 
const canPlaceFlowers1 = (flowerBed, n) => {
    let count = 0;

    for(let i = 0; i < flowerBed.length; i++) {
        if(
            flowerBed[i] === 0 && 
            (i === 0 || flowerBed[i-1] === 0) &&
            (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)
            ) {
                flowerBed[i] = 1;
                count++;
            } 

        if(count >= n) return true;
    }

    return false;

}

// 2. Optimized Brute Force
const canPlaceFlowers2 = (flowerBed, n) => {
    let count = 0, i = 0;

    while(i < flowerBed.length) {
        if(
            flowerBed[i] === 0 &&
            (i === flowerBed.length - 1 || flowerBed[i+1] === 0) &&
            (i === 0 || flowerBed[i - 1] === 0) 
            ) {
                count++;
                i+=2;
            } else {
                i+=1;
            }

        if(count >= n) return true;
    }

    return false;
}

// 3. greedy

const canPlaceFlowers = (flowerBed, n) => {
    let count = 0, i = 0;
    while(i < flowerBed.length) {
        if(
            flowerBed[i] === 0 && 
            (i === 0 || flowerBed[i - 1] === 0) && 
            (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)
        ) {
            flowerBed[i] = 1;
            count++;
        }

        i++;

        if(count >= n) return true;
    }

    return false;
}