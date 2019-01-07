
first()
.then((resolved)=>{return second(resolved);})
.then(function(resolved2){
	console.log(resolved2);
}
);