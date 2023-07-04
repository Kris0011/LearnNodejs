//fetch all docs
db.inventory.find() 
db.inventory.find({})
// SELECT * FROM inventory   (SQL for above)

db.inventory.find({qty:40})

db.students.find( { name: {$in : ["Kris","Naitik"] } } )   // $in for multiple values 
// SELECT * FROM `students` WHERE `name` in ("Kris", "Naitik")        (SQL)


// AND operator 
db.students.find( {department: "CE", age : {$lt : 20}})    // lt means less than 20 

// OR operator 
db.students.find( {$or: [ { department: "CE" }, { age : {$lt : 20}} ]})   // atleast One of then will be selected

// Find will give an object or list for sigle entity we can use findOne  which gives the first one which is selected
db.students.findOne( {$or: [ { department: "CE" }, { age : {$lt : 20}} ]}) 


