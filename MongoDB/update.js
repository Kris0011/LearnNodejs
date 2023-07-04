//UPDATE ONE 
db.movies.updateOne( { title: "Jurassic World: Fallen Kingdom" },
{
  $set: {
    plot: "A teenage girl risks everything–including her life–when she falls in love with a vampire."
  },
  $currentDate: { lastUpdated: true }
})



//UPDATE MANY
db.students.updateMany(
    { age: { $lt: 20 } },
    {
      $set: { deparment:"CE" }
    }
  )

//Updating Everything
  db.students.updateMany({},    {    $currentDate: { lastUpdated: true }
        }
      )