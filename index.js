'use strict';

// ? Practice 1.1

/*
Create a username and email address for a student.
 * @param { string } fullName
 * @return { array } userName and email
*/

// function
function createEmail(fullName) {

    // error handling
    if (fullName === null || fullName.trim() === "") { // if user enters empty response / no response
        return `Error no name given.`;
    } else if (fullName.toLowerCase() === "cancel") { // if user enters cancel or Cancel
        return `Program canceled.`;
    }

    // remove special characters and split fullName w/ " "
    const noSpecialChar = fullName.replace(/[^a-zA-Z ]/g, ""); // remove characters that are NOT letters NOR spaces
    const names = noSpecialChar.split(" "); // split the first and last name in fullName based on the space given by user
    const firstName = names[0]; // first item in array is first name
    const lastName = names[names.length - 1] // incase user adds a middle name, it is ignored and the last item in array is used as the last name

    // create username (first two letters of firstName + lastName, limit to 10 chars)
    let username = (firstName.substring(0, 2) + lastName).toLowerCase().substring(0, 10);

    // create email
    const email = `${username}@iu.edu`

    // output
    return `Welcome! Your username is ${username} and your new email is ${email}.`;

}


// usage
let promptName = prompt('Enter your full name:');
let userInfo = createEmail(promptName);
console.log(userInfo);