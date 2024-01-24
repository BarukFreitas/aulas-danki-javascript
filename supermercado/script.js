var itens = [];

        function cadastrar() {
        let nomeProduto = document.querySelector('input[name=nome_produto]');
        let valorProduto = document.querySelector('input[name=valor_produto]');

        itens.push({
            nome: nomeProduto.value,
            valor: valorProduto.value
        })
    
            let soma = 0;

            listaProdutos = document.querySelector('.lista-produto');
            listaProdutos.innerHTML = '';
            itens.map(function(val){

                soma += parseFloat(val.valor);
                listaProdutos.innerHTML+=`
                <div class="lista-produto-single">
                        <h3>`+val.nome+`</h3>
                        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
                    </div>     
                </div>
                `

            });
        soma = soma.toFixed(2);
        alert(soma);
        nomeProduto.value = '';
        valorProduto.value = '';

        
        somaProduto = document.querySelector('.soma-produto h1')
        .innerHTML = 'R$' + soma
    }
    
    function limpar(){
        somaProduto = docment.querySelector('.soma-produto h1');
        somaProduto.innerHTML = 'R$0'
        
    }

/*

<div class="lista-produto-single">
            <h3>Red Bull</h3>
            <h3 class="price-produto"><span>R$20,00</span></h3>
        </div>     
    </div>

*/


 