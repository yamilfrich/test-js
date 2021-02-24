require('./current_file').file(__filename);

// test 2

let com = '/bin/echo lol';
var child = require('child_process'); 
child.exec(com);
