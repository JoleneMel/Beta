//http request, and populating the table 
type userData = {name:string, website:string, email:string, address:any}  
let userData = [];
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {

  userData=myJson
    //we will query the table
    var table = document.getElementById('myTable')
    //while count is less then the length of the array
    for (var i = 0; i < userData.length; i++){
        //creating rows with template literals by appending it
        var row = `<tr>
                        <td id = "name"> ${userData[i].name} </td>
                        <td> ${userData[i].website} </td>
                        <td> ${userData[i].email} </td>
                        <td> ${userData[i].address.street}  ${userData[i].address.suite} ${userData[i].address.city}  ${userData[i].address.zipcode} </td>
                  </tr>`
                  //grabs variable and set innerhtml
        table!.innerHTML += row
console.log(userData)
    }
});

// class ModuleTable {
//     table: HTMLTableElement;
//     //private thead: HTMLTableElement;
//     private tbody: HTMLTableElement;
//     constructor() {
//       this.table = document.createElement('table');
//       this.thead = <HTMLTableElement> this.table.createTHead();
//       this.tbody = <HTMLTableElement> this.table.createTBody();
//       var hrow = <HTMLTableRowElement> this.table.tHead!.insertRow(0);
//       var cell = hrow.insertCell(0);
//       cell.innerHTML = "Module ID";
//     }
//   }

//  //this will take in the array which we will refer to as data,
//  const buildTable = (data:userData[]) => {
//     //we will query the table
//     var table = document.getElementById('myTable')
//     //while count is less then the length of the array
//     for (var i = 0; i < data.length; i++){
//         //creating rows with template literals by appending it
//         var row = `<tr>
//                         <td>${data[i].name}</td>
//                         <td>${data[i].website}</td>
//                         <td>${data[i].email}</td>
//                         <td>${data[i].address}</td>
//                   </tr>`
//                   //grabs variable and set innerhtml
//         table!.innerHTML += row
//     }
// }
