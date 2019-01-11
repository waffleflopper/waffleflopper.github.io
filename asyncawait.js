//Promises
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));

//async await
async function playerStart() {
    //await is 'pause here until this is done'
    const firstMove = await movePlayer(100, 'Left'); //pause
    const secondMove = await movePlayer(400, 'Left'); //Pause
    await movePlayer(10, 'Right'); //Pause
    await movePlayer(330, 'Left'); //Pause
}

//more realistic
//Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//Async Await
//syntactic sugar - yeah baby
const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}

//apparently we're doing something more realistic now
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

//did try catch in python a lot - no bigggggy
const getData = async () => {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(
            url => fetch(url)
            .then(resp => resp.json()
            )));
            console.log('users', users);
            console.log('posts', posts);
            console.log('albums', albums);
    } catch (err) {
        console.log('bad error oh nos', err);
    }
    
}