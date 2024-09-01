function getPokemon() {
    const regularImg = document.getElementById('regular');
    const shinyImg = document.getElementById('shiny');
    const pokeName = document.getElementById('name');
    const abilty = document.getElementById('abilty');
    const hidden = document.getElementById('hidden');
    const input = document.getElementById('text').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            pokeName.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            regularImg.src = data.sprites.front_default;
            regularImg.style.display = "block"
            shinyImg.src = data.sprites.front_shiny;
            shinyImg.style.display = "block"


            abilty.innerHTML = `Ability: ${data.abilities[0].ability.name}`;
            hidden.innerHTML = `Hidden Ability: ${data.abilities.find(a => a.is_hidden).ability.name}`;

        })
        .catch(err => console.error(err))
}
