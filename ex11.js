'use strict';

function all(one,two){
	return new Promise((fulfill,rejrct)=>{
		var counter=0;
		var temp=[];
			one.then((value)=>{
				temp[0]=value;
				counter++;
				if(counter>=2){fulfill(temp);}
			});
			two.then((value)=>{
				temp[1]=value;
				counter++;
				if(counter>=2){fulfill(temp);}
			});
	});
}
all(getPromise1(),getPromise2())
.then(console.log);