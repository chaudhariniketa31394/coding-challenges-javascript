var checkInclusion = function(s1, s2) {

    //'dxg', 'gotxxotgxdogt'
    if (s1.length > s2.length) return false
    const floatingMap = new Map();
    let floatingSum = 0;
    const checkMap = new Map();
    let checkSum = 0;
    let machingcount = 0;
    
    for (let i = 0; i < s1.length; i++) {
      console.log("before s1.charCodeAt(i)", s1.charCodeAt(i))
      console.log("before checkSum", checkSum)
      checkSum += s1.charCodeAt(i);
      console.log("after checkSum", checkSum)
      const count = checkMap.get(s1.charAt(i)) || 0;
      checkMap.set(s1.charAt(i), count + 1);
      console.log("checkMapcheckMap",checkMap)
    }
  
    for(let i = 0; i < s2.length; i++) {
        console.log("iiiiiiiiiiiiiiiiii",i)
        console.log("floatingMap sdfghjbefore",floatingMap)
      if (i >= s1.length) {
        console.log("s1.length",s1.length)
        const ch = s2.charAt(i - s1.length);
        console.log("chiiiiiiiiiiii",ch)
        const count = floatingMap.get(ch);
        console.log("count",count)
        console.log("floatingMap before",floatingMap)
        floatingMap.set(ch, count - 1);
        console.log("floatingMap after",floatingMap)
        console.log("floatingMap i - s1.length after",i - s1.length)
        console.log("current",i - s1.length)
        const chCode = s2.charCodeAt(i - s1.length);
        console.log("floatingSum before",floatingSum)
        floatingSum -= chCode;
        console.log("floatingSum after",floatingSum)
      }
      
      const ch = s2.charAt(i);
      const count = floatingMap.get(ch) || 0;
      floatingMap.set(ch, count + 1);
      const chCode = s2.charCodeAt(i);
      floatingSum += chCode;
          console.log("floatingSum",floatingSum)
          console.log("checkSum",checkSum)
      if (floatingSum === checkSum) {
        let isFound = true;
        checkMap.forEach((value, key) => {
          if (floatingMap.get(key) !== value) {
            isFound = false;
            return;
          }
        });
        if (isFound) {
            machingcount = machingcount + 1;
         // return true;
        }
      }
    }
  console.log("machingcount",machingcount)
    return false;
  };
  console.log(checkInclusion('dxg', 'gotxxotgxdogtgxd'))
