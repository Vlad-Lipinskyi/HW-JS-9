// 1 Завдання 

const names = ["Mango", "Poly", "Ajax"];

function logItems(array) {
  for (let i = 0; i < array.length; i++) { 
    console.log(`${i + 1} - ${array[i]}`);
  }
  return array;
}

console.log(logItems(names));

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
  let longestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(string));

// 4 Завдання 

function formatString(string) { 
  if (string.length > 40) { 
    return string.slice(0, 40) + "...";
  }
  return string;
}

console.log(formatString("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

// 5 Завдання 

const dangerWordsSpam = "spam";
const dangerWordsSale = "sale";

function checkForSpam(message) { 
  const checkWord = message.toLowerCase();
  return checkWord.includes(dangerWordsSpam) || checkWord.includes(dangerWordsSale);
}

console.log(checkForSpam("spam, sale, spam, sale"));

// 6 Завдання 

const numbers = [];

function collectNumbers() {
  const input = prompt("Введіть число (або натисніть Cancel для завершення)");
  
  if (input === null) {
    return; 
  }
  
  numbers.push(Number(input)); 
  collectNumbers(); 
}

collectNumbers();

if (numbers.length > 0) {
  let total = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  console.log(`Загальна сума чисел дорівнює ${total}`);
}
