var database = [
	{
		username: "waffleflopper",
		password: "hello",
	},
	{
		username: "jess",
		password: "hello",
	},
	{
		username: "robert",
		password: "secret",
	}
];
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

function isUserValid(u, p) {
	for (var i = 0; i < database.length; i++) {
		if(database[i].username === u && database[i].password === p) {
			return true;
		} 
	}
	return false;
}

function signIn(u, p) {
	if(isUserValid(u, p)) {
		console.log(newsfeed);
	} else {
		alert("wrong username/password");
	}
}



signIn(userNamePrompt, passwordPrompt);