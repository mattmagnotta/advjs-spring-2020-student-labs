arguements = process.argv
var result = 0
for (let i = 2; i < arguements.length;i++){
  result += Number(arguements[i])
}
console.log(result)
