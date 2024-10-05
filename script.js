//definindo a lista que será modificada
const mensagem = document.querySelectorAll('.msg');

//criando o botão
const btn = document.createElement('button');
btn.textContent = 'modificar frases';
document.querySelector('.container').appendChild(btn);

//adicionando eventos ao botão
btn.addEventListener('click', function() {
    for (let i = 0; i < mensagem.length; i++) {
        mensagem[i].textContent = 'Morra com memórias, não com sonhos.';
        mensagem[i++].textContent = 'Tenha coragem suficiente para começar e coração suficiente para terminar.';
        mensagem[i++].textContent = 'A realidade está errada, os sonhos são reais.';
    }
});

//criando botão olá
const ola = document.createElement('button');
ola.textContent = 'dizer olá';
document.querySelector('.container').appendChild(ola);
//add event
ola.addEventListener('click', function (){
    alert('Olá, espero que tenha gostado das frases!');
});