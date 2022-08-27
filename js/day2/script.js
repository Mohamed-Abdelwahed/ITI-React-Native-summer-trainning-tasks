// /// Who am I game  ? !!

(function findOut(){
const doYouFly = confirm("Do You Fly ? ")
  if (doYouFly) {
 const areYouWild = confirm("Are You Wild ? ")
    if(areYouWild){
        console.log("Eagle");
    }else{
        console.log("Parrot");
    }
    
  }else{
const doYouLiveUnderSea = confirm("Do YouLive Under Sea? ")
    if(doYouLiveUnderSea){
        const areYouWild = confirm("Are You Wild ? ")
        if (areYouWild) {
            console.log("Shark");
            
        }else{
            console.log("Dolphine");
        }
    }else{
        const areYouWild = confirm("Are You Wild ? ")
        if (areYouWild) {
            console.log("Lion");
            
        }else{
            console.log("Cat");
        }
    }
  }
})()
////////////////////////////////////////////////
const numberOfnames = +prompt("Enter Number Of names : ")
var arrOfnames = [] ;
function nameList(num){
    
    while(num != 0 ){
           let name = prompt("Enter next Name  : ")
           arrOfnames.push(name);
           num--;
    }    
}

nameList(numberOfnames);

console.log( `First name  : ${arrOfnames[Math.floor(Math.random() * (numberOfnames-1))]}  && Second name :   ${arrOfnames[Math.floor(Math.random() * (numberOfnames-1))]}` );
// console.log( `First name  : ${arrOfnames[1]}  && Second name :   ${arrOfnames[2]}` );

///////////////////////////////////////////////////////



const numberfuzz = +(prompt("Enter number To guess Fuzz or not : "));
if(numberfuzz%5 == 0 && numberfuzz%3 == 0){
    console.log(`fizz buzz`);
}else if(numberfuzz%5 == 0){
    console.log("fizz");
}else if(numberfuzz%3 == 0){
    console.log("buzz");
}else{
    console.log("None .........");
}

/////////////////////////////////////
const textSerchin = prompt("Enter text to search letter i : ")
const arrOfi = []
for (let index = 0; index < textSerchin.length; index++) {
    if (textSerchin[index] == 'i') {
        arrOfi.push(index)
    }
    
}
console.log(arrOfi);