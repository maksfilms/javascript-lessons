/*const newUser = {
    name: "Bob",
    age: 25,
    friends: ["Mark", "Alex", "Ann"],
}

const deepCopy = {
   ...newUser,
    friends: newUser.friends.map(f => (f))*/





const users = {
    name: "Maks",
    friends: {Bob: 12, Mike: 25}
}

const deepCopy = {...users, friends: {...users.friends}}

console.log(deepCopy.friends === users.friends);






