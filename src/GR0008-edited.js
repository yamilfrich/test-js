require('./current_file').file(__filename);

// test local 2 - rename file

// Case 1: (Identifier)
let code = 'console.log("foobar");';
eval(code);
let req = { body: { evil: '1+1' } };

// Case 2: (MemberExpression)
eval(req.body.evil);
