// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

//array foreach
let newArray = [];
array.forEach(user => {
     let { username } = user;
     username = username + "!";
     newArray.push(username);
 });

//array map - add '?' to username
const mapArray = array.map(user => user.username + "?");

//array filter - only users on team red
const filterArray = array.filter(user => user.team === "red");

//array reduce total score from everyone
const reduceArray = array.reduce((acc, user) => {
    return acc + user.score;
}, 0);

