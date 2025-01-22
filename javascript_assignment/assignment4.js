//get minimum value using function
function getMinimum(array){
  let min_val = Infinity
  for(let i = 0; i < array.length; ++i)
  {
    if(min_val > array[i])
      min_val = array[i]
  }
  return min_val
}

//get maximum value using function

function getMaximum(array){
  let max_val = -Infinity
  for(let i = 0; i < array.length; ++i)
  {
    if(max_val < array[i])
      max_val = array[i]
  }
  return max_val
}



//declare empty array 
let array = []

for(let i = 0; i < 10; ++i)
{
  //generating random value using random() method between 1 to 100
  let n = Math.floor(Math.random() * 100);
  array.push(n)
}

// function call
let min_val = getMinimum(array)
let max_val = getMaximum(array)

console.log("Maximum value from array: ", max_val)
console.log("Minimun value from array: ", min_val)
