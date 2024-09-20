#!/usr/bin/node
const arg1 = process.argv.slice(2)[0]
if (Number(arg1) == arg1){
	console.log(`My number: ${Number(arg1)}`);
}else{
	console.log('Not a number');
}
