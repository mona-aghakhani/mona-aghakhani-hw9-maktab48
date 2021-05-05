const fs = require("fs");
// read files
//  fs.readFile("./test.txt", "utf-8", function (err, data) {
//     if(err){
//                 console.log('ERROR',err);
//     }
//     else{
//               console.log(data);
//          }
//  });

// create files (appendfile,open,writefile)
//1.appendfile
//  creating the file if it does not yet exist. 
// fs.appendFile("newfile.txt", "new text", function (err, data) {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     console.log('the "new text" was append to newfile');
//   }
// });
//2.open()
//create an empty file named newfile2.txt:
//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing.
// fs.open("newfile2.txt", "w", function (err, data) {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     console.log('newfile2 is created');
//   }
// });
//3.writefile 
// adding text to Existing file
// fs.writeFile('newfile3.txt', 'new text3', function (err) {
//     if (err) {
//         console.log("ERROR", err);
//       } else {
//         console.log('the "new text3" was append to newfile2');
//       }
//   });

// update files (appnedfile, writefile)
// append text
// fs.appendFile("newfile3.txt", "\n new updeteText", function (err, data) {
//   if (err) {
//     console.log("ERROR", err);
//   } else {
//     console.log('the "new updeteText" was appended ');
//   }
// });


// writefile replace
// fs.writeFile('newfile4.txt', 'new updateText2', function (err) {
//     if (err) {
//         console.log("ERROR", err);
//       } else {
//         console.log('the "new updateText2" was replaced to newfile4');
//       }
//   });


  //delete files

// fs.unlink('newDelete.txt', function (err) {
//     if (err) {
//         console.log("ERROR", err);
//       } else {
//         console.log('the "newDelete.txt" was deleted');
//       }
// });

// rename file
// fs.rename('newUpdate.txt', 'newNotebook.txt', function (err) {
//     if (err) {
//         console.log("ERROR", err);
//       } else {
//         console.log('the "newUpdate.txt" was renamed ');
//       }
//   });