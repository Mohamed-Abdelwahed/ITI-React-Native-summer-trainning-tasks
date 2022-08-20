

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
