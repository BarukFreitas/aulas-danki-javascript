function testes(){
    return new Promise(function(resolve, reject){
        const erro = false;
        if(erro){
            reject('Erro...')
        }else{
            resolve("A promisse foi resolvida com sucesso!");
        }


    })
}

testes().then(function(res){
    alert(res);
})