// Code your solution here
function findMatching(drivers,string){
  return drivers.filter(name => { return (name.toLowerCase()===string.toLowerCase())})
}

function fuzzyMatch(drivers,string){
  return drivers.filter(name => {
     if (string.charAt(0) === name.charAt(0))
     {return name;}
   }
   )
}
