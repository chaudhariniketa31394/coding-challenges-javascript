


function sumPair(arr: number[], target) {
    let num1 = 0;
    let num2 = 0;
    let map = {};
    for (let i in arr) {
        if (!map[arr[i]]) {
            map[target - arr[i]] = arr[i]
        } else {
            num1 = map[arr[i]];
            num2 = arr[i];
        }

    }
console.log("num1num1",num1)
console.log("num2m1",num2)

}
sumPair([10, 20, 40, 50], 60)