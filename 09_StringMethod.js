// string method
/*  
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
*/

// the three methods used to extract a part of a string are: slice, substring and substr
/*  
  slice(start, end)
  substring(start, end)
  substr(start, length)
*/

/*   
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included)
*/
let text = "Apple, banana, kiwi";
console.log(text.length);
let part = text.slice(7,13);
console.log(part);
// if u remove the second number, it will slice out the rest of the string
console.log(text.slice(7));
// console.log(text.slice(-3, -10));

// replace-- replaces a specified value with another value in a string
let word = "I am learning how to program";
let newWord = word.replace("program", 'cook')
console.log(newWord);

// use a regular expression for case insensitive
let text2 = "I am learning javascript and javascript";
let text3 = text2.replace(/JAVASCRIPT/i, 'Typescript');
console.log(text3);

// to replace all matches, use a regular expression with a g flag
let text4 = text2.replace(/javascript/g, 'React');
console.log(text4);

// replace all
//method allows you to specify a regular expression instead of a string to be replaced.If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown

let txt = "I love cats. Cats are very easy to love. Cats are very popular";
txt = txt.replaceAll(/Cats/g, 'Dogs');
txt = txt.replaceAll(/cats/g, 'dogs');
console.log(txt);

//touppercase and tolowercase

let txt2 = "Hello world";
console.log(txt2.toUpperCase());
console.log(txt2.toLowerCase());

// concat
{
  let text = "hello";
  let text2 = "word";
  let res = text.concat(" ", text2);
  console.log(res);

  console.log(text+ " " +text2);
}

// trim() method is used to remove whitespace from both end of a string
{
  let text = "   Hello world   ";
  console.log(text.trim());
  console.log(text.length);
  let len = text.trim();
  console.log(len.length);
  console.log(text.trimStart());
  console.log(text.trimEnd());
  let convert = text.split();
  console.log(Array.isArray(convert));
}

//charAt= this returns a character at a specified index

{
  let text = 'hello world';
  let char = text.charAt(0);
  console.log(char);
}

//SPLIT =  convert string to an array
{
  let text = "hello word";
  let split = text.split(" ");
  console.log(split);
  // console.log(split.charAt(0));
}