



async function usersData(){
    try{
        let users = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await users.json()
        for (let iterator of data) {

            // console.log(`${iterator} = ${data[iterator]}`);
            return data
        }
        return data
    }
    catch(e)
    {
         return e;
    }

}
 console.log(usersData());


 ////////////////////////////////
 const tr = document.createElement("tr");
 const td1 = document.createElement("td");
 const td2 = document.createElement("td");
 const td3 = document.createElement("td");
 let textNode1 = "" 
 let textNode2 = "" 
 
 let allUsers = fetch("https://jsonplaceholder.typicode.com/users")
 .then(statfullUsers=>statfullUsers.json())
 .then(allData=>{
    for (const key in allData) {
     
    textNode1 = document.createTextNode(allData[key].id)
    textNode2 = document.createTextNode(allData[key].name)
    td1.appendChild(textNode1)
    td2.appendChild(textNode2)
    tr.appendChild(td1,td2)

    // document.querySelector('#user__table__body').innerHTML = tr
    document.querySelector('#user__table__body').appendChild(tr)








                // document.getElementById('user__table__body').innerHTML +=`<tr>
                //    <td>${allData[key].id}</td>
                //    <td>${allData[key].name}</td>
                //    <td>${allData[key].email}</td>
                // </tr>`

        
    }
 })