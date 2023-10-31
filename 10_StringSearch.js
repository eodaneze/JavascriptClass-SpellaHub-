// js search

/* 
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

// indexOf method returns the index (position) the first occurrence of a string in a string: its returns -1 if the word can not be found
let text = "Please locate where 'locate' occurs";
let index = text.indexOf('locatess');
console.log(index); //returns 7
// you can add a second parameter to know the starting position of the search
let secondParams = text.indexOf('locate', 16);
console.log(secondParams);

// lastIndexOf method returns the index (position) the last occurrence of a string in a string: its returns -1 if the word can not be found-
let lastIndedx = text.lastIndexOf('locate')
console.log(lastIndedx); //returns 21 cos it the last index of the last location that was found

// search method = searches a string for a string (or a regular expression) and returns the position of the match

{
    let text = "Please locate where 'locate' occurs!";
    let search = text.search('locate');
    console.log(search);
}

// js match method =  returns an array containing the results of matching a string against a string (or a regular expression).
{
    let text = "The rain in SPAIN stays mainly in the plain";
    let match = text.match("ain");
    console.log(match);
}

// include method = method returns true if a string contains a specified value.
{
    let text = "Hello world";
    let includes = text.includes("world");
    console.log(includes);
}
