db.movies.deleteMany({})  //deletes everthing 

db.movies.deleteMany( { title: "Titanic" } )  


db.movies.deleteOne( { cast: "Brad Pitt" } ) // Wil delete only first document 