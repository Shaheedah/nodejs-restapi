var musicians = [{
    musician1: {
      artist: "Westlife",
      song: "Queen of my heart",
      id: 1
    },
    musician2: {
      artist: "Boys2Men",
      song: "On bended knees",
      id: 2
    },
    musician3: {
      artist: "Joe",
      song: "I believe",
      id: 3
    },
    musician4: {
      artist: "Brandy",
      song: "He is",
      id: 4
    }
  }
]

// Add a new musician to the list

exports.create = function(req, res) {
  var newMusician = req.body;
  console.log(newMusician);
  musicians["musician" + newMusician.id] = newMusician;
  console.log(JSON.stringify(musicians, null, 4));
  res.send("Post Successfully: \n" + JSON.stringify(newMusician, null, 4));
};

// Edit an existing musician on the list

exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedMusician = req.body; 
  if(musicians["musician" + id] != null){
  musicians["musician" + id] = updatedMusician;
  console.log(JSON.stringify(musicians, null, 4))
  res.end("Update Successfully! \n" + JSON.stringify(updatedMusician, null, 4));
  }
  else
  {
  res.end("Don't Exist Musician:\n:" + JSON.stringify(updatedMusician, null, 4));
}
};

//Delete an existing musician

exports.delete = function(req, res) {
  var deleteMusician = musicians["musician" + req.params.id];
  delete musicians["musician" + req.params.id];
  console.log(JSON.stringify(musicians, null, 4) );
  res.end( "Deleted musician: \n" + JSON.stringify(deleteMusician, null, 4));
  };
  

// Retrieve all musicians

exports.findAll = function(req, res) {
  console.log( JSON.stringify(musicians, null, 4));
  musicians.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
  console.log(musicians);
  
  // res.end("All Musicians: \n" + JSON.stringify(musicians, null, 4));
  res.json(musicians)  
};

//Retrieve one musician by an id
exports.findOne = function(req, res) {
  var musician = musicians["musician" + req.params.id];
  console.log( JSON.stringify(musician, null, 4));
  res.end( "Find a Musician:\n" + JSON.stringify(musician, null, 4));
};

exports.findForm = function(req, res) {
  var musician = musicians["musician" + req.params.id];
  console.log( JSON.stringify(musician, null, 4)); 
  res.sendFile('/index.html');
}




