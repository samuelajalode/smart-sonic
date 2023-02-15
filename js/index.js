// write sign up function

const signUp = (email, password) => {
    // your code below
if (email === "" || password === "") {
    alert("Please enter your email and password");
}
else {
    alert("Thank you for signing up!");
}
}

// write sign in function

const signIn = (email, password) => {
    // your code below
if (email === "" || password === "") {
    alert("Please enter your email and password");
}
else { 
    alert("Thank you for signing in!");
}
}

// write sign out function

const signOut = () => {
    // your code below
alert("You have signed out");
}

// write change password function

const changePassword = (oldPassword, newPassword) => {
    // your code below
if (oldPassword === "" || newPassword === "") {
    alert("Please enter your old password and new password");
}
else {
    alert("Your password has been changed");
}
}

// write a function that will display the current date and time

const displayDate = () => {
    // your code below
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let ampm = hour >= 12 ? 'pm' : 'am';
hour = hour % 12;
hour = hour ? hour : 12; // the hour '0' should be '12'
minute = minute < 10 ? '0'+minute : minute;
second = second < 10 ? '0'+second : second;
let strTime = month + "/" + day + "/" + year + " " + hour + ':' + minute + ':' + second + " " + ampm;
alert(strTime);
}

// write a function that will display the current time

const displayTime = () => {
    // your code below
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let ampm = hour >= 12 ? 'pm' : 'am';
hour = hour % 12;
hour = hour ? hour : 12; // the hour '0' should be '12'
minute = minute < 10 ? '0'+minute : minute;
second = second < 10 ? '0'+second : second;
let strTime = hour + ':' + minute + ':' + second + " " + ampm;
alert(strTime);
}

// write a function that will display the current date

const display_Date = () => {
    // your code below
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let strDate = month + "/" + day + "/" + year;
alert(strDate);
}

// write a function that will display the current year
     


