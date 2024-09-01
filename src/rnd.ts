/*
 * rnd - генераторы
 */
 
var random = Math.random;
 
var create = exports.create = function create(chStr: any, defLen = 0) {
	let l = 0;
    let fn;
	
	chStr = chStr.split('');
	defLen = (!defLen) ? 10 : defLen;
	l = chStr.length;
	
	fn = function rnd(len: any): string {
		var s;
		
		len = (!len || len < 0) ? defLen : len;
		s = new Array(len);
		
		while (len--) {
			s[len] = chStr[random() * l  | 0];
		}
		
		return s.join('');
	};
	
	return fn;
};


var rndStr = exports.rndStr = create('qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM');
var rndInt = exports.rndInt = create('0123456789');