const express = require('express');

const app = express();
const PORT = 5001;

const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];

const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});



app.get('/song', (req, res) => {
    res.send(songListArray);
});


// TODO - Add GET for songs



// POST - To add new artist

// app.post('/artists', (req,res) => {
//     // The data (body) sent from the client is saved for us
//     // in `req.body`
//     // Note that without bodyParser setup, req.body will be undefined!
//     console.log(`Get a POST request!`, req.body);

//     // Grab the new quote from the request body
//     let artist = req.body.artistToAdd;

//     // Push the quote into our array
//     console.log(`Adding new quote: `, artist)
//     artistListArray.push(artist);

//     // Send back a status code of 201
//     res.sendStatus(201);
// });

app.post('/artist', function(req, res) {

    console.log('in the POST /quotes route.')

    // express adds a property to our request object called 'body'.
    // That is where express will put the payload from our client.
    // req.body has the payload sent to us by the client
    // Note: This only works if your server knows how to work with JSON objects
    // so we need to add in the boiler plate on line 8: app.use(express.json());
    // Without that like, our POST routes won't know how to turn the body into an object.
    console.log(req.body);
    // For this to all work, I'm assuming with the code I'm about to write
    // that req.body will have this structure:
    // {
    //     author: ____,
    //     text: ____
    // }
    // I'm choosing that structure, because it matches the structure of all the other quotes on the server.

    let newArtist = req.body;

    // If it has the right structure, I can just add it to the list of quotes!
    artistListArray.push(newArtist);

    // And then tell the client I saved it.
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});