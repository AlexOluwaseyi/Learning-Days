/*
This piece of program is a random secure password generator!
Written by Oluwaseyi Akintola on Wednesday 25th January, 2023, 8:00pm
This code will be hosted somewhere on my github later after completion. https://www.github.com/AlexOluwaseyi
*/

char = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5",
"6","7","8","9","0","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]","|","\\",":",";","'","<",",",">",".","?","/"]
generate=[]
min=0
max=char.length
charPicker=0
password=""
/*
for (i in char){
    console.log(char[i])
} 
 */

/*
This section of the code will determine what the length of the random password would be.
*/
passwordLength=0
function passLength(){
    randNum=Math.floor(8+(Math.random()*10));
    passwordLength=randNum;
}
passLength()

/*
This part of the code generates a random number between 0 and the number of possible character for the password, represented by array char.
This random integer is passed on to the character picker variable 'charPicker'.
*/

function generateRandomInteger(min, max) {
    picker= Math.floor(Math.random() * (max - min + 1)) + min;
    charPicker=picker;
}
generateRandomInteger(0, char.length)

/*
The while statements continue to loop until the characters in out password is up the the random length of password.
Also the generateRandomInteger function is called upon again in order to get another random character from our character pool.
*/
while (generate.length < passwordLength){
    generate.push(char[charPicker]); //An array of randomly iterated characters from our character pool being pushed into the empty array "generated=[]"
    generateRandomInteger(0, char.length);
}

password=generate.join("") //This helps us to stitch the array together into a single string
console.log(password) //a copy of our randomly generated password.