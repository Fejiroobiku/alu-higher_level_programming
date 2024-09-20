#!/usr/bin/node
let args = process.argv.slice(2);
let str1 = args[0];
let str2 = args[1];
let str3 = 'is';
let space = ' ';
if(args[0] === undefined){
	console.log('undefined is undefined');
}else{
	let fullstr = str1.concat(space,str3,space,str2);
	console.log(fullstr);
}
