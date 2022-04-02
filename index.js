const btnGerarCoronavac = document.querySelector('#gerar-coronavac');
const btnFecharCoronavac = document.querySelector('#fechar-coronavac');
const coronavacBg = document.querySelectorAll('.coronavac-bg')[0];
const coronavac = document.querySelectorAll('.coronavac')[0];
const switchMaizena = document.querySelector('#flexSwitchCheckMaizena');
const itens = document.querySelector('#itens');
const selectJs = document.querySelector('#js');

const imagens = [
    'angular.png',
    'js.png',
    'react.png',
    'vue.jpg',
];

btnGerarCoronavac.addEventListener('click', () => {
    coronavac.classList.toggle('open');
    coronavacBg.classList.toggle('open');
});

btnFecharCoronavac.addEventListener('click', () => {
    coronavac.classList.toggle('open');
    coronavacBg.classList.toggle('open');
});

switchMaizena.addEventListener('change', (e) => {

    const isChecked = e.target.checked
    if(isChecked) {
        itens.classList.add('row-cols-md-3');
        itens.classList.remove('row-cols-md-2');
        itens.children[2].classList.remove('d-none');
        itens.children[2].classList.add('d-block');
        return;
    }

    itens.classList.add('row-cols-md-2');
    itens.classList.remove('row-cols-md-3');
    itens.children[2].classList.remove('d-block');
    itens.children[2].classList.add('d-none');
});

selectJs.addEventListener('change', (e) => {
    let imagem = imagens.find(x => x.includes(e.target.value));
    document.querySelector('#imgBgJs').src = `img/${imagem}`;
    setTimeout(function() {
        coronavac.classList.toggle('open');
        coronavacBg.classList.toggle('open');
    }, 900);
});