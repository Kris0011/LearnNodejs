db.students.find().limit(1) // First element
db.students.find().skip(1) // Skip  element

db.students.find().sort({age:1}) // Sort in ascending order
db.students.find().sort({age:-1}) // Sort in descending order  


// limit and skip can be useful for pagination
// for example i have news website having 5 pages and i want to show 6 news in sigle page 

// pgNo=0 , newsNo = 6 are the initial variables

db.news,find().skip((pgNo-1)*newsNo).limit(newsNo)   // when we increase page no the skip number will be incresed as well 