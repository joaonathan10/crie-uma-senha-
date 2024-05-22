document.querySelector('.parametro-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha; 
const botoes = document.querySelector('.parametro-senha-botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
   if(tamanhoSenha > 1){
  // tamanhoSenha = tamanhoSenha - 1;
   }
   numeroSenha.textContent = tamanhoSenha;
   gerasenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
   // tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
// codigo omitido
constant campoSenha=document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function gerasenha(){
    let senha ='';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = marth.random()*letrasMaiusculas.length;
    numeroAleatorio=Math.floor(numeroAleatorio);
    senha=senha+letrasMaiusculas[numeroAleatorio];
    }
}
campoSenha.value=senha;