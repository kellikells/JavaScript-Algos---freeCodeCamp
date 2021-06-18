function largestOfFour(arr) {
    let maxArr = arr.map((sub) => {
        let largest = 0;
        for (let i = 0; i < sub.length; i++){
            if (sub[i] > largest || i==0) {
                largest = sub[i];
            }
        }
        return largest;
    })
    console.log(maxArr);

    return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) // [25, 48, 21, -3].

