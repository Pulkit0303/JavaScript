//foreach
const friends = ["Player1", "Player2", "Player3", "Player4"];

friends.forEach(function (players) {
  console.log(players);
});

//Using arrow function (as callback fn) in foreach
friends.forEach((people) => {
  console.log(people);
});

function printAny(thing) {
  console.log(thing);
}
//We can pass a function reference in callback function too
friends.forEach(printAny);

//Foreach provides multiple parameters: value, index & array
friends.forEach((person, index, array) => {
  console.log(person, index, array);
});

const langDict = [
  {
    language: "JavaScript",
    extension: ".js",
  },
  {
    language: "Python",
    extension: ".py",
  },
  {
    language: "Shell",
    extension: ".sh",
  },
];

// Accessing object elements inside an array using for-each
langDict.forEach((language) => {
    console.log(language["extension"]);
})
