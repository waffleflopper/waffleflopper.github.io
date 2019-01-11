const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HIII')
}) 

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 5000, 'Is it me you arere looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })

promise.then(result => result + '!')
        .then(result2 => result2 + '?')
        .catch(() => console.log('error!')) 
        //.catch with grab any error that happens in the chain
        //before it. will not catch 'result3' then.
        .then(result3 => {
            console.log(result3 + '!')
        });
        //output: Stuff Worked!?!




/*
        Promises are good for asynchronous programming.
        Promises kind of let task happen in the background
*/

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))


/* ---------- EXERCISE --------- */

const promise4sec = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'success');
});
promise4sec.then(result=> {
    console.log(result)
});
