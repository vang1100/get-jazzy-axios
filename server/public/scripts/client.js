function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            console.log('quotes from server', quotesFromServer);
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            
           
        }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        })
        
        axios({
            method: 'GET',
            url: "/song"
        })
        .then(function(response) {
            console.log(response);
            let songsFromServer = response.data;
            let songcontent = document.querySelector('#songTableBody');
            for (let songs of songsFromServer) {
                songcontent.innerHTML += `
                 <tr>
                    <td>${songs.title}</td>
                    <td>${songs.artist}</td>      
                </tr>
                `;
            }
            
        })
        .catch(function (error){
            console.log(error);
        })

       

        };

    // TODO Add Axios request for /songs and display on DOM
   
// axios({
//     method: 'GET',
//     URL: "/song"
// })
// .then(function(response) {
//     console.log(response);
//     let songsFromServer = response.data
//     let songcontent = document.querySelector('#songTableBody');
//     for (let songs of songsFromServer) {
//         songcontent += ` 
        
//         `
//     }
// })

// }



onReady();


// AXIOS POST HERE

function submitHandler(event){
    // stop the page from reloading
    event.preventDefault();
    console.log('running submit new quote');
    //package up my quote into quote object

    let name = document.querySelector('#name').value;
    let birthDate = document.querySelector('#birth-Date').value;
    let deathDate = document.querySelector('#death-Date').value;

    console.log('inputs', name, birthDate, deathDate);

    let artistToAdd = {
        name: name,
        born: birthDate,
        died: deathDate
    };

    // axios post takes in 2 things
        // 1) the path
        // 2) the payload object

    axios.post('/artist', artistToAdd)
    .then(response => {
        console.log('post/artist works', response);

        document.querySelector('#name').value = '';
        document.querySelector('#birth-Date').value = '';
        document.querySelector('#death-Date').value = '';


        onReady();
    })
    .catch (error=> {
        console.log('post failed', error);
        alert('something went wrong');
    })

}