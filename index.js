// Code your solution here
function findMatching(drivers,string){
  return drivers.filter(name => { return (name.toLowerCase()===string.toLowerCase())})
}
