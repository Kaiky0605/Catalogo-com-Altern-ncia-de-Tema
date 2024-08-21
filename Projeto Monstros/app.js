let monstros = [
    {
        id: 1,
        Nome: "Oswaldo",
        altura: 3.4,
        habilidades:" É mestre em furtividade. Ele se camufla nas sombras, tornando-se invisível, e realiza saltos de longa distância com precisão. Sua visão noturna permite que ele opere perfeitamente na escuridão, ideal para missões secretas.",
        foto:'https://robohash.org/Oswaldo'


    },
    {
        id: 2,
        Nome: "MegaMente",
        altura: 6.32,
        habilidades:"Possui um intelecto colossal, capaz de criar invenções avançadas e controlar mentes fracas. Ele se protege com um campo de força que o torna invulnerável por curtos períodos, tornando-o um estrategista imbatível.",
        foto:'https://robohash.org/MegaMente'


    },
    {
        id: 3,
        Nome: "Devinho",
        altura: 2.42,
        habilidades:"É incrivelmente ágil e pode se teletransportar para curtas distâncias, evitando ataques. Seu grito ultrassônico desorienta inimigos, e sua velocidade relâmpago o torna quase intocável.",
        foto:'https://robohash.org/Devinho'


    },
    {
        id: 4,
        Nome: "Furia-do-dia",
        altura: 4.85,
        habilidades:"É a força bruta personificada. Ele causa terremotos com seus golpes, pode lutar sem se cansar e, durante o dia, absorve energia solar, aumentando sua força e velocidade a níveis devastadores.",
        foto:'https://robohash.org/Furia-do-dia'


    },
]

let seção = document.querySelector(".Monstros");

let botao =  document.querySelector('.btn')

botao.addEventListener("click", () => {
    document.documentElement.classList.toggle('dark')
})

let todosOsMonstros = monstros.map(monstro =>{
    return `<div> 
    <p> Nome: ${monstro.Nome}</p>
    <p> Altura: ${monstro.altura}</p>
    <img src ="${monstro.foto}">
    <p class = 'Habilidades'> Habilidades: ${monstro.habilidades}</p>
    
    </div>`

})

seção.innerHTML = todosOsMonstros