function findUpperLowerCase(inputstr) {
    var LowerCasemap = {};
    var UpparCasemap = {};
    var arr = inputstr.split("");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            if (arr[i] == arr[i].toUpperCase()) {
                if (UpparCasemap[arr[i]]) {
                    UpparCasemap[arr[i]] += 1;
                }
                else {
                    UpparCasemap[arr[i]] = 1;
                }
            }
            else {
                if (LowerCasemap[arr[i]]) {
                    LowerCasemap[arr[i]] += 1;
                }
                else {
                    LowerCasemap[arr[i]] = 1;
                }
            }
        }
    }
    console.log("LowerCasemap", LowerCasemap);
    console.log("UpparCasemap", UpparCasemap);
}
findUpperLowerCase("Hello World");
