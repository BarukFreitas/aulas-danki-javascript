document.addEventListener('DOMContentLoaded', function () {
    // Função para fazer uma requisição à API e preencher a lista de Pokémon
    function searchPokemon() {
        // Limpar a lista de Pokémon antes de adicionar novos
        clearPokemonList();

        // Obter o valor da caixa de pesquisa
        var searchTerm = document.getElementById('searchInput').value;

        // Fazer a requisição à API (substitua a URL pela sua API)
        var apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + searchTerm;

        // Exemplo de requisição com fetch
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Adicionar cada Pokémon à lista
                data.forEach(pokemon => {
                    addPokemonCard(pokemon);
                });
            })
            .catch(error => console.error('Erro na requisição:', error));
    }

    // Função para limpar a lista de Pokémon
    function clearPokemonList() {
        var pokemonList = document.getElementById('pokemonList');
        pokemonList.innerHTML = '';
    }

    // Função para adicionar um cartão de Pokémon à lista
    function addPokemonCard(pokemon) {
        var pokemonList = document.getElementById('pokemonList');

        // Criar um elemento div para o cartão de Pokémon
        var pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        // Adicionar a imagem do Pokémon
        var pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image; // Substitua pelo caminho da imagem na sua API
        pokemonImage.alt = pokemon.name;
        pokemonCard.appendChild(pokemonImage);

        // Adicionar o nome do Pokémon
        var pokemonName = document.createElement('p');
        pokemonName.textContent = pokemon.name;
        pokemonCard.appendChild(pokemonName);

        // Adicionar o cartão de Pokémon à lista
        pokemonList.appendChild(pokemonCard);
    }
});
