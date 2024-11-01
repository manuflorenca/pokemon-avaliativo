const pokeBall = [
    {
        "nome": "Garchomp",
        "descricao": "A Habilidade de Garchomp, Rough Skin, significa que, às vezes, ele consegue causar dano aos Pokémon que o atingem, então os oponentes que atacarem Garchomp sem tomar cuidado podem acabar levando dano de volta. Além disso, ao usar Dig, Garchomp consegue atacar seus oponentes de surpresa surgindo por debaixo da terra",
        "ataque": 3.5,
        "resistenca": 3.5,
        "mobilidade": 2.5,
        "pontuacao": 2.5,
        "apoio": 0.5,
        "url": "assets/stat-garchomp.png"
    },
    {
        "nome": "Dragonite",
        "descricao": "Dragonite está pronto para detonar com a competição no Pokémon UNITE como um Melee All-Rounder. Controlando o poder do fogo, da água e da eletricidade, Dragonite é um Pokémon poderosíssimo que está pronto para trazer a vitória de maneira arrasadora",
        "ataque": 4,
        "resistenca": 2.5,
        "mobilidade": 2.5,
        "pontuacao": 3,
        "apoio": 0.5,
        "url": "assets/stat-dragonite.png"
    },
    {
        "nome": "Dragapult",
        "descricao": "Use Golpe Fantasma para invadir as defesas do oponente com Dragapult, um Atacante de Longo alcance, no Pokémon UNITE",
        "ataque": 4,
        "resistenca": 2.5,
        "mobilidade": 4,
        "pontuacao": 2.5,
        "apoio": 0.5,
        "url": "assets/stat-dragapult.png"
    },
    {
        "nome": "Tyranitar",
        "descricao": "Detone tudo com este tirânico Corpo a corpo Versátil que está pronto para agitar a Ilha de Aeos. Experimente o Poder Ancestral de Tyranitar e aniquile a competição em Pokémon UNITE",
        "ataque": 4,
        "resistenca": 4,
        "mobilidade": 2,
        "pontuacao": 1.5,
        "apoio": 1,
        "url": "assets/stat-tyranitar.png"
    },
    {
        "nome": "Metagross",
        "descricao": "Um combatente Corpo a corpo Versátil que vai fazer os oponentes verem até estrelas com sua Levitação Magnética. Metagross está pronto para esmagar meteoricamente a competição no Pokémon UNITE",
        "ataque": 3.5,
        "resistenca": 4,
        "mobilidade": 2.5,
        "pontuacao": 1,
        "apoio": 1,
        "url": "assets/stat-metagross.png"
    },
    {
        "nome": "Goodra",
        "descricao": "Espalhe visgo até o topo da Ilha de Aeos com o Defensor Corpo a corpo Goodra no Pokémon UNITE",
        "ataque": 2.5,
        "resistenca": 4,
        "mobilidade": 2.5,
        "pontuacao": 2.5,
        "apoio": 2,
        "url": "assets/stat-goodra.png"
    }
     
    ]
     
    const div = document.querySelector("#div")
    const nome = document.querySelector("#nome")
    const descricao = document.querySelector("#sobre")
    const ataque = document.querySelector("#atk")
    const resistencia = document.querySelector("#def")
    const mobilidade = document.querySelector("#mob")
    const pontiacao = document.querySelector("#ponts")
    const apoio = document.querySelector("#apoio")
     
    const btnAdd = document.getElementById('btnAdd');
     
    const cards = document.querySelector("#cards")
     
     
    btnAdd.addEventListener("click", function(){
        const imagem = document.querySelector("#img");
     
        if (imagem.files.length > 0) {
            const file = imagem.files[0];
            console.log(file.name)
     
            let variavel={
                "nome": nome.value,
                "descricao": descricao.value,
                "ataque": ataque.value,
                "resistenca": ataque.value,
                "mobilidade": mobilidade.value,
                "pontuacao": pontiacao.value,
                "apoio": apoio.value,
                "url": `assets/${file.name}`
            }
            // pokeBall.pop(variavel)
     
            pokeBall.push(variavel)
        }
       
        cards.innerHTML = ""    
     
        for (i=0; i<pokeBall.length; i++){
            cards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src=${pokeBall[i].url} class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${pokeBall[i].nome}</p>
            </div>
        </div>`
    }
    }
    )
     
     
     
     