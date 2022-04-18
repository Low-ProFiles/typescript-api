fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: 1,
        id: 101,
        title: 'test content',
        completed: false
    })
})
    .then(function (res) {
    return res.json();
})
    .then(function (data) {
    console.log(data);
});
