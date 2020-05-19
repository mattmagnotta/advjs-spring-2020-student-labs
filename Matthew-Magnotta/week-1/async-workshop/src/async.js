// Async Utilities

function parallel (tasks, callback) {
  const results = []
  tasks.forEach((task, i) => {
    task((err,result)=>{
      if (err){
        callback(err)
      }
      else{
        results.push(result)
      }

    })

  })

}
x


// Try to define map using parallel
function map (collection, iteratee, callback) {

}

function waterfall (tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}
