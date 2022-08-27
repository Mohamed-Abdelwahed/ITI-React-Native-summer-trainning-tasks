
for(let counter = 1 ; counter <= 6 ; counter++)
    document.write(`<h${counter}>This is header number ${counter}</h${counter}>`)

///////////////////////////////////

let sum = 0  
while(sum <100)
{
    let number = Number(prompt('Enter next number and 0 to exite : '));
     sum += number;
     if( number === 0 ){
        break;
     }
}
console.log(sum);

/////////////////////////////////////////

const str = prompt("Enter Text To Count 'e'  : ");
var count = 0;
for(var i = 0 ; i < str.length; i++){
    if(str[i] == 'e') count++
}
console.log(count);





//////////////////////////////
let isPalindrom = prompt("Enter TO test Palindrom  : ")
const isSensetive = confirm("Is sensitive or not ??? ")
var countPalind = 0;
if(isSensetive){
    for (let index = 0; index <= (isPalindrom.length / 2); index++) {

        if(isPalindrom[index] == isPalindrom[isPalindrom.length-index-1]){
            countPalind++;
        }
        
    }
}else{
  isPalindrom = isPalindrom.toLocaleLowerCase();
    for (let index = 0; index < (isPalindrom.length /2)-1; index++) {

        if(isPalindrom[index] == isPalindrom[isPalindrom.length-index-1]){
                 countPalind++;
        }
        
    }


}

if(countPalind == isPalindrom.length / 2  ) {
    console.log("String is palindrom");
}else{
    console.log("Not Palindrom");
}



///////////////////////////////////////
