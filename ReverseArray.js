
function range(a,b) {
  envelope =[]
  for (let i=a; i<=b; i++){
	envelope.push(i); 
    /*console.log(envelope);
    console.log(i);*/
	}    
  console.log(envelope);
  console.log(envelope.length)
	revEnv=[]  
  for (let j=envelope.length; j>=0; j--){
    revEnv.push(j);
    }
  console.log("The reverse array starts here.")
  console.log(revEnv);
}  
range(1,10) 

