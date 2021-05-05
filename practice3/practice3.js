const fs = require("fs");
fs.readFile("./names.txt", "utf-8", function (err, data) {
  fs.readFile("./numbers.txt", "utf-8", function (err2, data2) {
    let arr1 = data.split("\r\n");
    let arr2 = data2.split("\r\n");
    let myArr1 = arr1.map((item) => {
      return item.split("-");
    });
    let myArr2 = arr2.map((item) => {
      return item.split("-");
    });
    let str = [];
    let result = [];
    for (let i = 0; i < myArr1.length; i++) {
      count = 0;
      for (let j = 0; j < myArr2.length; j++) {
        if (myArr2[j][0] === myArr1[i][0]) {
          count++;
          if (str.indexOf(myArr1[i][1]) === -1) {
            str = str.concat([myArr1[i][1], myArr2[j][1]]);
          } else {
            str = str.concat([myArr2[j][1]]);
          }
        }
      }
      if (count === 0) {
        result.push(`${myArr1[i][1]} hasn't any number \n `);
      }
      str.push(count);
      if (count === 1) {
        let n = str.lastIndexOf(1);
        result.push(`${str[n - 2]}'s phone number is ${str[n - 1]} \n `);
      }
      if (count > 1) {
        let phones = [];
        let n = str.lastIndexOf(count);
        for (let i = count; i > 0; i--) {
          phones.push(str[n - i]);
        }
        result.push(`${str[n - count - 1]}'s phone number are ${phones}\n`);
      }
    }
    console.log(result.join(""));
    fs.writeFile("./result.txt", result.join(""), function () {});
  });
});
