function attachTitle(one){
	return 'DR. '+one;
}
var promise=Promise.resolve('MANHATTAN');


promise.then(attachTitle).then(console.log);
//orignal solution
/* 'use strict';

 function attachTitle(name) {
   return 'DR. ' + name;
 }

 Promise.resolve('MANHATTAN')
   .then(attachTitle)
   .then(console.log);*/