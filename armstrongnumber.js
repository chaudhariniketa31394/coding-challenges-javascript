function armstrong(num)
{
    let sum = 0;
    let lengthofnum = num.toString().length
    console.log("lengthofnum",lengthofnum);
    let temp = num;
    while(temp>0){
        let reminder = temp%10;
        console.log("reminder",reminder)
        temp = parseInt(temp/10);
        sum += reminder ** lengthofnum;
        console.log("temp",temp)
       
    }

console.log("summmmmmm",sum)
}
armstrong(153)