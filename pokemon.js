const pokeBall=[{

    "nome":"Darkrai",

    "descricao":"Taque o terror nos sonhos de vitória dos seus oponentes! Darkrai está com tudo pronto para mostrar seus piores pesadelos no Pokémon UNITE.",

    "ataque":4.5,
    "resistencia":1.5,
    "mobilidade":3,
    "pontuacao":2,
    "apoio":2,
    "url":"/assets/stat-darkrai.png"
},

{

    "nome":"Mimikyu",

    "descricao":"Não é só fantasia, é feitiçaria das brabas com esse combatente Corpo a corpo Versátil forte e assustador. Mimikyu está pronto para jogar duro contra a competição no Pokémon UNITE.",

    "ataque":4,
    "resistencia":2.5,
    "mobilidade":3.5,
    "pontuacao":1,
    "apoio":1,
    "url":"/assets/stat-mimikyu.png"
},

{

    "nome":"Mew",

    "descricao":"Mande a competição à loucura com este Atacante de Longo alcance malandro na Ilha de Aeos. Mew está pronto para confundir a concorrência com uma infinidade de movimentos em Pokémon UNITE!",

    "ataque":4,
    "resistencia":2,
    "mobilidade":3,
    "pontuacao":2,
    "apoio":3,
    "url":"/assets/stat-mew.png"
}

]

{/* <div class="card" style="width: 18rem;">
<img src="/assets/stat-mimikyu.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Nome</h5>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

const cards=document.querySelector("#cards");

console.log(cards)

for (var i=0; i<pokeBall.length;i++){

    cards.innerHTML+= `<div class="card" style="width: 18rem;">
    <img src= ${pokeBall[i].url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Nome</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div> `
}


const formulario=document.querySelector("#formulario")

for (var i=0; i<pokeBall.length;i++){

    formulario.innerHTML+= `<form id="formulario" class="container" action="">

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="t_field_nome" placeholder="Nome">
    <label for="floatingInput">Nome</label>
    </div>
    <div class="form-floating">
    <input type="text" class="form-control" id="t_field_descricao" placeholder="Descrição">
    <label for="floatingInput">Descrição</label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" step="0.1" class="form-control" id="t_field_ataque" placeholder="Ataque">
        <label for="floatingInput">Ataque</label>
    </div>

    <div class="form-floating">
        <input type="number" step="0.1" class="form-control" id="t_field_resistencia" placeholder="Resistencia">
        <label for="floatingInput">Resistencia</label>
    </div>

    <div class="form-floating mb-3">
        <input type="number" step="0.1" class="form-control" id="t_field_mobilidade" placeholder="Mobilidade">
        <label for="floatingInput">Mobilidade</label>
    </div>

    <div class="form-floating">
        <input type="number" step="0.1" class="form-control" id="t_field_pontuacao" placeholder="Pontuação">
        <label for="floatingInput">Pontuação</label>
    </div>

    <div class="form-floating">
        <input type="number" step="0.1" class="form-control" id="t_field_apoio" placeholder="Apoio">
        <label for="floatingInput">Apoio</label>
    </div>

    <div class="form-floating">
        <input type="file" class="form-control" id="t_field_imagem" placeholder="Imagem">
        <label for="floatingInput">Imagem</label>
    </div>

    <button id="btn_enviar" >Enviar</button>

</form>`

}