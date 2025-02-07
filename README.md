# String Manipulate Javascript Library

This is a javascript string manipulation library that has commonly used string manipulation function such as

- reverse - for reversing strings passed into it
- isPalindrome - check if string means the same thing if spelt on reverse
- wordCount - return the number of words in a string
- characterFrequency - return an json object of characters in the string and how many times they apppear
- toTitleCase - format string as a title
- trim - removes white spaces on the edges (left and right) of the string

## Installation
Download the index file and include in your html file as
```
npm i string_utility
```
**filepath** is the path to the downloaded file **Please rename the file if there's another index.js in the same folder it resides**

## Use Case

### Reverse:
```
import {reverse} from "string_utility";

let originalString = 'Your string'
let reversedString = reverse(originalString)
```

### isPalindrome:
```
import {isPalindrome} from "string_utility";

let myString = 'Your string'
let isPalin = isPalindrome(myString)
//will return boolean (true or false)
```

### wordCount:
```
import {wordCount} from "string_utility";

let myString = 'Your string'
let count = wordCount(myString)
//will return a number *2*
```

### characterFrequency:
```
import {characterFrequency} from "string_utility";

let myString = 'Your string'
let frequency = characterFrequency(myString)
//will return a json *{"Y": 1, "o": 1, "u": 1, "r": 2,...}*
```

### toTitleCase:
```
import {toTitleCase} from "string_utility";

let myString = 'Your string'
let title = toTitleCase(myString)
//will return a title case sting *Your String*
```

### toTitleCase:
```
import {trim} from "string_utility";

let myString = '  Your string '
let trimedString = trim(myString)
//will return a trimed sting *'Your string'*
```