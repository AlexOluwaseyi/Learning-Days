/*
  function countBs(word) {
count=0
for (let i=0; i<word.length; i++){
	if (word[i]==="B"){
		count++;
		};
}
console.log(count)
}  
countBs("ABrakadaBra Boohaha bbb B nbb bb") 
*/

function countChar(char, word){
  count=0;
  for (let i=0; i<word.length; i++){
    if (word[i]===char.toString()){
      count++;
    };
  }
  console.log(count);
}

countChar(prompt(), prompt())