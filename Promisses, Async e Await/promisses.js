function testes(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const erro = false;
            if(erro){
                reject('Erro...')
            }else{
                resolve("A promisse foi resolvida com sucesso!");
            }
            
        }, 2000);


    })
}

testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
});

async function testes2(){
    await testes().then(function(res){
        alert(res);
    });
    alert('olá');
}

testes2()