/*
number1=prompt('Enter the lowest number in the range ')
number2=prompt ('Enter the highest number in the range ')
range =[]
for (let i=number1; i<=number2; i++){ 
  range.push(i) 
};
console.log(range)


function sum(){
	oldSum=0
	newSum=0
	for (let item=0; item<=range.length; item++){
		newSum=item+oldSum;
		oldSum=newSum;
	}
	console.log(newSum);
}
sum() 
*/

function range(a,b,c) {
  envelope =[]
  for (let i=a; i<=b;){
    envelope.push(i);
    if (c!=0){
    i+=c;
    }
    else{
    i++;
    }
    /*console.log(envelope);
    console.log(i);*/
	}    
  console.log(envelope);
}  
range(1,10,2) 


function sum(){
	oldSum=0
	newSum=0
	for (let item=0; item<=envelope.length; item++){
		newSum=item+oldSum;
		oldSum=newSum;
	}
	console.log(newSum);
}
sum() 
