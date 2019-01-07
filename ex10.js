function alwaysThrows(){
	throw new Error('OH NOES');
}
function iterate(one){
	console.log(one);
	return one+1;
}
function onRejected(error){
	console.log(error.message);
}
var promise=Promise.resolve(1);
promise.then(iterate).then(iterate).then(iterate)
		.then(iterate).then(iterate).then(alwaysThrows).then(iterate)
		.then(iterate).then(iterate).then(iterate)
		.then(iterate).catch(onRejected);