const{readFileSync}=require('fs');

let fileContent=readFileSync('./hello.txt','utf-8');
console.log(fileContent);