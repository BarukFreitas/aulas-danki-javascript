var itens = [];


document.addEventListener('DOMContentLoaded', function() {
    // Aguarda o carregamento completo do DOM
  
    // Obtém o botão "Cadastrar" pelo ID
    var cadastrarButton = document.getElementById('cadastrar');
  
    // Adiciona um ouvinte de evento para o evento 'click'
    cadastrarButton.addEventListener('click', function() {
        let nomeProduto = document.querySelector('input[name=nome_produto]');
        let valorProduto = document.querySelector('input[name=valor_produto]');

        itens.push({
            nome: nomeProduto.value,
            valor: valorProduto.value
        })
    
            listaProdutos = document.querySelector('.lista-produto');
            listaProdutos.innerHTML = '';
            itens.map(function(val){
            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                    <h3>`+val.nome+`</h3>
                    <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
                </div>     
            </div>
            `
        
            });
        nomeProduto.value = '';
        valorProduto.value = '';
    });

});


/*

<div class="lista-produto-single">
            <h3>Red Bull</h3>
            <h3 class="price-produto"><span>R$20,00</span></h3>
        </div>     
    </div>

*/


 