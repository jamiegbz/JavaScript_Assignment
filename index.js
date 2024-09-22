//1. create array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log('Ages:', ages);

//1a. subtract first element in array from last element
let minusAges = ages[ages.length - 1] - ages[0];
console.log('minusAges:', minusAges);

//1b. Add new age to array
ages.push(100)
console.log('ages after adding a new number:', ages);
// subtract first element in new array from last element
let newMinusAge = ages[ages.length - 1] - ages[0];
console.log('newMinusAge:', newMinusAge);

//1c. Use loop to ilerate through the array and calculate the average age
// using for loop to add each age
let sumOfAges=0;

for(let i=0; i < ages.length; i++){
    sumOfAges += ages[i]
    console.log('Index:', i, 'sumOfAges:', sumOfAges);
}
console.log('Total Sum', sumOfAges);
//calculate the average of ages
let average = sumOfAges / ages.length
console.log('Average:', average);

//2. create array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log('names:', names);
//2a. use a loop to iterate through the array and calcuate the 
//average number of letters per name
let totalCharacters = 0; 

for(let i =0; i < names.length; i++){
    totalCharacters += names[i].length
    console.log('Index:', i, 'Name:', names[i], 'Total Characters:', totalCharacters)
};

let averageNum = totalCharacters / names.length;
console.log('Average:', averageNum);

//2b. Use a loop to iterate through the array again 
//and concatenate all names together, separated by spaces
let concatNames = '';
for(let i = 0; i < names.length; i++){
    
    concatNames = concatNames.concat(names[i] + " ");
    console.log('Names concatenated:', concatNames);
}


//3. How do you access the last element of any array?
//to access the last elelment of an array use length -1 
//an example would be:
console.log('Last Element of ages array:', ages[ages.length - 1])

//4.How do you access the first element of an array?
// to access the last element of an array use [0]
//an example would be:
console.log('Firsy Element of ages array:', ages[0]);

//5. Create new array called nameLengths
//Write a loop over the previously created names array and add the length of 
//each name to the nameLengh array.
let nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length)
    console.log('Name lenghts array:', nameLengths);
}

//6. write a loop to iterate over the nameLengths array and calculate the sum
//of all the elements in the array
let charactersTotal = 0;

for(let i = 0; i < nameLengths.length; i++){
    charactersTotal += nameLengths[i]
    console.log('Characters Total', charactersTotal);
}

//7. Write a function takes two parameters, word and n, as arguments and returns
//the word concatenated to itself n number of times
function concatWords(word, n){
    console.log('Word Par:', word, 'n Par:', n);
    let concat = word.repeat(n)
    console.log(concat);
}
concatWords('Hello', 3);

//8. write a function that takes two parameter, firstnName and lastName,
// returns a full name. seperated by space
function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName
    console.log(fullName)
}
fullName('Jamie' , 'Gomez');

//9. Write a function that takes an array of numbers and 
//returns true if the sum of all the numbers in the array is greater than 100
let numbers1 = [100, 200, 300, 400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i]
        console.log('Total:', total);
    }

    if(total > 100){
        console.log('Total', total, true);
        return true
    }else {
        console.log('Total', total, false);
        return false
    }
}
sumNumbersArray(numbers1);

//10. write a function that takes an array of numbers and returns the average
//of all the elements in the array
function calcuateNumbersAverage(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i]
        console.log('Calculate Function, total:', total);
    }
    let average = total / array.length;
    console.log('Average of numbers:' ,average);
    return average;
}
calcuateNumbersAverage(numbers1);

//11. write a function that takes two arrays of numbers and returns true if 
//the average of the elements in the firsy array is greater than the average 
//of elements in the second array
let numbers3 =[100, 100, 100]
let numbers4 = [100,100,99]

function twoAverage(array1, array2){
    console.log('Parameters', array1, array2);
    let total1 =0;
    let total2 =0;
    for(const number of array1){
        total1 += number
        console.log('current number:', number, 'total:', total1);
    }
    for(const number of array2){
        total2 += number;
        console.log('current number:', number, 'total', total2)
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log('Average for 1:', average1, 'Average for 2:', average2);
    if (average1 > average2){
        console.log('average1 > average2' ,true);
        return true
    }else if (average1 < average2){
        console.log('average1 < average2' ,false)
        return false
    }else{
        console.log('Numbers are equal');
    }
}
twoAverage(numbers3, numbers4)

//12. write a function called willBuyDrink that takes a boolean isHotOutside
//and a number moneyInPocket, and returns true if it is hot outside and if 
//moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){

    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log('Buy a drink?', buyDrink);
    return buyDrink
}
willBuyDrink(true,11)

//13. create a function of your own that solves a problem. 
//a function that counts the vowels in a string

function countVowels(word){
    var vowels = 'AEIOUaeiou';
    var countVowelLetters = 0;
    
    for(var i=0; i < word.length; i++){
        if(vowels.indexOf(word[i]) !== -1){
            countVowelLetters += 1;
        }
    }
    return countVowelLetters;
}
console.log(countVowels('Hello my name is Jamie'));


//function is called countvowels and takes a parameter (word)
// a variable that contains all vowels in lowercase and uppercase (vowels)
//wrote a for loop to count each vowel in the string 