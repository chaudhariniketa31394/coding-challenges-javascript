// string is palindrom or not exmple madam
// function checkPalindrome(name:string){
//     const reverse:string[] = [];
//     const arr = name.split("");
//     for(let i=arr.length-1; i>= 0; i--)
//     {
//         console.log(arr[i])
//         reverse.push(arr[i])
//     }
//     let reverseString = reverse.join('')
//     console.log("reverseString",reverseString)
// }
// checkPalindrome('madam')
function checkPalindrome(name) {
    var arr = name.split("");
    var reverse = arr.reverse().join('');
    console.log("reverse", reverse);
}
checkPalindrome('madamddddddddd');
