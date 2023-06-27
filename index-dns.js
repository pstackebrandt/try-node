'use strict';
const dns = require('dns');
dns.lookup('google.com', (err, address) => {
	if (err) console.log(err)
	else console.log(address);
})


console.log('Hello world');