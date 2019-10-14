module.exports = function(app) {
 
    var musicians = require('../app/playlist.js');
 
    // Add A new musician to the list
    app.post('/users', musicians.create);

    // Edit an existing musician
    app.put('/users/:id', musicians.update);
 
    // Delete an existing musician from the list
    app.delete('/users/:id', musicians.delete);

    // Retrieve a single musician by Id
    
    app.get('/users/:id', musicians.findOne);
    
    
    app.get('/users/:id', musicians.findOne);
    
    // List all the musicians on the Playlist
    app.get('/users', musicians.findAll);


    app.get('/',musicians.findForm);

}

