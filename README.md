# Practice 1

Use the repository set up for you to complete this practice problem.

## Practice 1.1

Complete the function createEmail(), which takes a name, and creates a username and email address for a student. You may write additional functions as needed.

```js
/*
Create a username and email address for a student.
 * @param { string } fullName
 * @return { string } userName and email
*/
function createEmail(fullName) {}

let promptName = prompt('Enter your full name:');
let userInfo = createEmail(promptName);
```

### Email / Username Requirements

-   Username is the first two characters of the first name, plus the last name
-   No more than 10 characters allowed total
-   Special characters are ignored and not included in a username/email
-   If a user says "Cancel", the program should handle any errors
-   Example Output: "Welcome! Your username is stmendis3 and your new email is stmendis3@iu.js.edu."

### Test Cases:

Use these names to test your code. The resulting email is shown.

-   Steve Mendis => stmendis@iu.edu
-   Shelby Anne O'Longain => sholangain@iu.edu
-   Hubert Blaine Wolfeschlegelsteinhausenbergerdorff => huwolfesch@iu.edu

## Practice 1.2

Add to your program. Allow two people with the same name to both have unique usernames and emails.

-   If the username already exists, add a number to the end from 1 to 9 to the end. (For the sake of this exercise we'll assume that we'll never need no more than 10 variations. If you'd like to attempt this, please see Bonus.)
-   If the username is 10 characters long, then replace the final letter with a number instead. Usernames must be unique.
-   Once a username/email is created, add the username to the _userNames_ array storing all known usernames.
-   Example output: "Welcome! Your username is stmendis3 and your new email is stmendis3@iu.js.edu."

```js
let userNames = [
    'erlee',
    'erlee1',
    'stmendis',
    'bekizior',
    'mabekova',
    'stmendis1',
    'stmendis2',
    'akeshapula',
    'sholongain',
    'sholangai1',
];
```

### Test cases:

Use these same names to test your code. The resulting email is shown.

-   Steve Mendis => stmendis3@iu.edu
-   Shelby Anne O'Longain => sholangai2@iu.edu
-   Hubert Blaine Wolfeschlegelsteinhausenbergerdorff => huwolfesch@iu.edu

## Practice 1.3

Once a username and email is created, as the user if they'd like to create more.

-   Handle the user's response, as well as what happens if the user clicks "Cancel" in the prompt. Q: What DOES happen? (What is returned?)
-   Example prompt: "Would you like to create another email address? (yes/no)"

## Bonus (3 pts)

Allow for more than 10 people to have the same name.

-   Examples: if stmendis9 exists, allow for your program to generate a stmenis10. If sholangai9 exists, allow for sholanga10.
-   Probably the best way to do this is with regular expressions (taught in I211 and some CS courses). You MAY use regex for this if you understand what you're doing. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
-   It is also quite possible, although will take more lines of code, to modify your current technique to check for additional places in your string / array. USE THE TECHNIQUE THAT MAKES THE MOST SENSE TO YOU.