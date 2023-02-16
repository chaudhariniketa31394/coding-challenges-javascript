


function secondLargestNumber(inputarr:number[]){
let firstLargest = -1;
let secondLargest = -1;

for(let i in inputarr){
    if(inputarr[i] > firstLargest){
        secondLargest = firstLargest;
        firstLargest = inputarr[i];
    }else if(inputarr[i] > secondLargest)
    {
     secondLargest = inputarr[i]
    }
}

console.log("firstLargest",firstLargest)
console.log("secondLargest",secondLargest)

}
secondLargestNumber([1,4,2,6,8,3,10])