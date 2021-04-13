require('./current_file').file(__filename);

// test 5
// add
// 3
// lines

let com = '/bin/echo lol';
var child = require('child_process'); 
child.exec(com);
