require('./current_file').file(__filename);

/*
* [GR:0007:alpha]
* Simple SQLi
*/

let req = { body: { login: 'nope' } };

var id = 10;
var query = 'SELECT * from user where id=' + req.body.login + ';';
// test 1
