var promise=new Promise(function(fulfill,reject){
	setTimeout(()=>{reject(new Error('REJECTED!'));},300);
	});
function onReject(error){
	console.log(error.message);
}
function onResolved(msg){
	console.log(msg);
}
promise.then(onResolved,onReject);