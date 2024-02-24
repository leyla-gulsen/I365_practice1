'use strict';

// ? Practice 1.2

// given array of usernames
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
    'sholongai1',
];

// function
function createUsername(baseUsername) {
    let username = baseUsername;
    
    // if the array already contains the username...
    if (userNames.includes(username)) {
        // add a number to the end from 1 to 9 
        for (let i = 1; i <= 9; i++) {
            // if the username is 10 characters long, then replace the final letter with a number instead.
            let tempUserName = username.length >= 10 ? username.substring(0, 9) + i : username + i;
            // if this temporary username doesnt already exisit, assign it to username
            if (!userNames.includes(tempUserName)) {
                username = tempUserName;
                break;
            }
        }
    }
    
    // console.log(userNames); // | testing what userNames[] is before...
    
    // add username to the end of userNames[]
    userNames.push(username);

    // console.log(userNames); // | and after. userNames[] is updated but only in server file before refresh.

    return username;
}

// ? Practice 1.1

/*
Create a username and email address for a student.
 * @param { string } fullName
 * @return { array } userName and email
*/

// function
function createEmail(fullName) {

    // error handling
    // if (fullName === null || fullName.trim() === "") { // if user enters empty response / no response
    //     return `Error no name given.`;
    // } else if (fullName.toLowerCase() === "cancel") { // if user enters cancel or Cancel
    //     return `Program canceled.`; 
    // }

    // remove special characters and split fullName w/ " "
    const noSpecialChar = fullName.replace(/[^a-zA-Z ]/g, ""); // remove characters that are NOT letters NOR spaces
    const names = noSpecialChar.split(" "); // split the first and last name in fullName based on the space given by user
    const firstName = names[0]; // first item in array is first name
    const lastName = names[names.length - 1] // incase user adds a middle name, it is ignored and the last item in array is used as the last name

    // create username (first two letters of firstName + lastName, limit to 10 chars)
    let username = createUsername((firstName.substring(0, 2) + lastName).toLowerCase().substring(0, 10));

    // create email
    const email = `${username}@iu.edu`

    // output
    return `Welcome! Your username is ${username} and your new email is ${email}.`;

}

// ? Practice 1.3

function askToCreateMore() {
    let continueCreating = true;

    while (continueCreating) {
        let promptName = prompt('Enter your full name:');

        // check if prompt was cancelled or null
        if (promptName === null || promptName.toLowerCase() === "cancel") {
            console.log('Program canceled.');
            break;
        } else if (promptName) { // if not null, not "cancel", and not an empty string, create email
            let userInfo = createEmail(promptName);
            console.log(userInfo);
        } else { // if empty string but not cancelled
            console.log('Error no name given');
            break;
        }

        let response = prompt('Would you like to create another email address? (yes/no)');
        if (response === null || response.toLowerCase() !== 'yes') { // only continue if user says 'yes'
            continueCreating = false; // stop creating loop
            console.log('Goodbye.');
        }
    }
}

askToCreateMore();

// usage
// let promptName = prompt('Enter your full name:');
// let userInfo = createEmail(promptName);
// console.log(userInfo);