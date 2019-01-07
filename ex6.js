 /*var promise = new Promise(function (fulfill, reject) {
   fulfill('SECRET VALUE');
 });*/

 // Introducing: Promise.resolve
 // It does the exact same thing as above:

 var promise = Promise.resolve('SECRET VALUE');

function onRejected(error){
	console.log(error.message);
}
promise.catch(onRejected);
 // Likewise...

 /*var promise = new Promise(function (fulfill, reject) {
   reject(new Error('SECRET VALUE'));
 });*/

 //var promise = Promise.reject(new Error('SECRET VALUE'));