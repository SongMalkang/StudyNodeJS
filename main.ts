/* Run Localhost Server
var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end("Hello World\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081")
*/

/* File System 실습
var fs = require("fs"); // File System의 약자

var data = fs.readFileSync('input.txt'); // data 에 input.txt 파일을 읽은 결과를 집어 넣음

console.log(data.toString()); // 출력해봄
console.log("Program has ended"); // 구분용 String Line
*/

/* 비동기 처리 실습
var fs = require('fs');

fs.readFile('input.txt', function (err, data){
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended");
*/

