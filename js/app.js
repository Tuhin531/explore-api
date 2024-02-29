function lodeData2() {
    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}

function lodeUser() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data))

}
// function displayUser(data){
//     console.log(data);
// }


// function displayUser(data) {
//    for ( const user of data){
//     console.log(user.name);
//    }
// }


function displayUser(data) {
    const ul = document.getElementById('user-data');
    for ( const user of data){
      console.log(user.name);
     const li = document.createElement('li');
     li.innerText = user.name;
     ul.appendChild(li);
    }
 }