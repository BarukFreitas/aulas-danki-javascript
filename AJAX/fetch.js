fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method: 'POST',
    body: JSON.stringify({
        title: 'Danki Code',
        body: 'Meu conteúdo',
        userId: 10
    }),
    headers:{
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(json => console.log(json));
