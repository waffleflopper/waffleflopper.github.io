var user = {
    username: "waffleflopper",
    password: "hello",
}

var database = [user];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(u, p) {
    if (u === database[0].username && p === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("wrong user/pass");
    }
}

signIn(userNamePrompt, passwordPrompt);