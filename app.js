// 1   Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.
console.log('test')
const sum = function(a,b){

    if(a === b){
        return (a + b) * 3;
    }
    else{
          return a + b
    }
        
}

console.log(sum(3,3));



// 2 Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.

const check = function(int1,int2){

          if( int1 === 50 || int2 === 50 ){
            return true;
          }else if( int1 + int2 === 50){
              return true;
          }
          else{
              return false;
          }
}

console.log(check(20,10));

// 3 Create a function to remove a character at a specified position from a given string: 
// pass the position and the string as parameters, return the new string.

const removeCharacter = function(str,position){

      let start = str.substring(0,position);
      let end = str.substring(position + 1, str.length);
      return (start + end);
}

console.log(removeCharacter('strive',0));
console.log(removeCharacter('strive',1));
console.log(removeCharacter('strive',2));
console.log(removeCharacter('strive',4));

// 4  Create a function to find and return the largest of three given integers.

const largestInt = function(x,y,z){
        
    
    if(x > y && x > z ){
        return `${x} is the largest integer.`
    }else if(y > x && y > z ){
        return `${y} is the largest integer.`
    } else if( z > x && z > y){
        return `${z} is the largest integer.`
    } else{
        return 'Check your inputs, there must be an error.'
    }

}

console.log(largestInt(12,4,3))

// 5 Create a function to check if two numbers are in the range 40-60 or 70-100. 
// Return true if they do, return false if one (or both) don't.

const checkRange = function (num1,num2){
      
         let firstNumber = num1 >= 40 &&  num1 <= 60 || num1 >=70 && num1 <= 100;
         let secondNumber = num2 >= 40 && num2  <= 60 || num2 >=70 && num2 <= 100;
           if(firstNumber && secondNumber){
               return true;
           } else{
               return false;
           }
            
     

        //   let firstRange = (num1 >= 40 || num1 <= 70 ) ? true : false
        
}

console.log(checkRange(40, 20))
console.log(checkRange(40, 40))
console.log(checkRange(50, 100))

// 6. Create a function to create a new string composed of a specified number of copies of a given string. 
// Pass the string and the number of copies as parameters.

const new_string = function(copies,string){
     
     return string.repeat(copies) ;
                
}

console.log(new_string(5,'Strive'));

// 7 Create a function to display the city name if the string begins with "Los" or "New". 
// Pass the city name as a parameter. Return false if they start with a different string.

const cityName = function(city){

              if(city.startsWith('Los',0) || city.startsWith('New',0)){
                  return city;
              } else{
                  return false;
              }
}

console.log(cityName('Los Angeles'))
console.log(cityName('New York'))
console.log(cityName('Madrid'))

// 8  Create a function to calculate and return the sum of all elements from an array with 3 elements. 
// Pass the array as a parameter.

const sum_all = function(arr){

       
}

