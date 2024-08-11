// 1 Завдання

const fruits = ["Mango", "Poly", "Ajax"];

function logItems(array) {
  for (let i = 0; i < array.length; i ++) { 
    console.log(`${i + 1} - ${array[i]}`)
  }
  return array;
}

console.log(logItems(fruits));


// 2 Завдання

const message = "Ваша прикраса";
const pricePerWord = 10;

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const totalCost = words.length * pricePerWord;
    return totalCost;
  }

  const cost = calculateEngravingPrice(message, pricePerWord);

  console.log(cost);


// 3 Завдання

const string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti blanditiis dolorem ipsa molestiae rem illo voluptates cum qui tenetur facere a itaque quod deserunt perspiciatis enim necessitatibus, aliquam in iure.";

function findLongestWord(string) {
    const array = string.split(" ");
    let longestWord = array[0].length;
    for(let i = 1; i < array.length; i++){
        if(longestWord < array[i].length) {
            longestWord = array[i];
        }
    };
    return longestWord;
}
console.log(findLongestWord(string));