//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

//Code here

var strArr = ['hello', 'beautiful', 'world']
var numArr = [10,1,2,3,4,5]

function stringItOut(arr){
  for(i = 0; i < arr.length; i++){
    if(arr[i] / 1 === arr[i]){
      arr.sort(function(a, b){return b - a})
      console.log(arr)
    } else/*if(arr[i] / arr[i] !== 1)*/{
     arr.sort(function(a, b){return a < b})
     //console.log('whatup')
    }
  }
  console.log(arr)
  return arr.toString()
}

stringItOut(strArr)

//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

//Code here

var mathResult = math(complex, 2, 3)