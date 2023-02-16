function armstrong(num) {
    var sum = 0;
    var lengthofnum = num.toString().length;
    console.log("lengthofnum", lengthofnum);
    var temp = num;
    while (temp > 0) {
        var reminder = temp % 10;
        console.log("reminder", reminder);
        temp = temp / 10;
        console.log("temp", temp);
        // temp = parseInt(temp)
    }
}
armstrong(153);
