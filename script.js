"use strict";
let userData = '';
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    userData = myJson;
    console.log(userData);
});
//this will take in the array which we will refer to as data,
function buildTable(data) {
    //we will query the table
    var table = document.getElementById('myTable');
    //while count is less then the length of the array
    for (var i = 0; i < data.length; i++) {
        //creating rows with template literals by appending it
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].website}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].address}</td>
                  </tr>`;
        //grabs variable and set innerhtml
        table.innerHTML += row;
    }
}
