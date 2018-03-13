window.onload = () => {
    new JogoDaVelha();
}

class JogoDaVelha {
    constructor(){
        this.iniciaElementos();
        this.turno = true;
    }

    iniciaElementos(){
        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click', this.realizaJogada.bind(this))
    }

    realizaJogada(event){
        event.target.innerHTML = this.turno ? 'X': '0';
        this.turno = !this.turno;
    }
}