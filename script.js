let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



// funçao de atualizaçao de moedas (direto do servidor)
async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    
    console.log(dolar)
    console.log(euro)



    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar EUA") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })

    }


    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

//essa funçao e responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeirasMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar EUA") {
        textoMoedas.innerHTML = "Dolar"
        bandeirasMoedas.src = "./Imagens/EUA.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeirasMoedas.src = "./Imagens/Euro.png"
    }
    convertermoedas()
}

botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocaDeMoeda)



