// Purpose: get the IP address of a hostname

'use strict';

const dns = require('dns');

const hostname = 'google.com';

dns.lookup(hostname, (err, address) => {
	if (err) console.log(err)
	else console.log(address);
});

// possible Output: 2a00:1450:4005:801::200e 