const { container } = require("webpack");

const serverurl = process.env.SERVER_API;

console.log("Dev m3", serverurl);

const itens = [{
        id: 0,
        nome: 'Camiseta Mescla',
        img: 'img/img_2.png',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Saia em couro',
        img: 'img/img_3.png',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Cardigan Tigre',
        img: 'img/img_4.png',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Cardigan off white',
        img: 'img/img_5.png',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Body Leopardo',
        img: 'img/img_6.png',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Casaco Pelos',
        img: 'img/img_7.png',
        quantidade: 0
    },
    {
        id: 6,
        nome: 'Cropped Stripes',
        img: 'img/img_8.png',
        quantidade: 0
    },
    {
        id: 7,
        nome: 'Camisa Transparente',
        img: 'img/img_9.png',
        quantidade: 0
    },
    {
        id: 8,
        nome: 'Pochete Clutch',
        img: 'img/img_10.png',
        quantidade: 0
    },

]
var $lista = document.querySelector('ul');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('btn')

$botao.addEventListener('click'function() {

        var item = $produto.Value;
        console.log(item)

    })
    // iniciliazarLoja = () => {
    //     var containerProdutos = document.getElementById('produtos');
    //     itens.map((val) => {
    //         console.log(val.nome);
    //         containerProdutos.innerHTML = `

//         <div class="produtos-single">
//             <img src="` + val.img + `" />
//             <p>` + val.nome + `</p>
//             <a key="` + val.id + `= href="">adicionar ao carrinho!<a/>
//         </div>
//         ;`
//     })
// }
// iniciliazarLoja();

// atualizarCarrinho = () => {
//         var containerCarrinho = document.getElementById('carrinho');
//         containerCarrinho.innerHTML = ""
//         itens.map((val) => {
//                     if (val.quantidade > 0) {
//                         containerCarrinho.innerHTML = `

//         <p>` + val.nome + ` | quantidade: ` + val.quantidade + `</p>
//         <hr>
//     }

// }

// var links = document.getElementsByTagName('a');
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//         let key = this.getAttribute('key');
//         itens[key].quantidade++;
//         atualizarCarrinho();
//         return false;
//     })
// }