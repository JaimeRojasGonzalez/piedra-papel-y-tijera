
const PIEDRA = 0;
const PAPEL = 1;
const TIJERA = 2;

const empate = 0;
const ganar = 1;
const perder = 2;

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const resultText = document.getElementById('start-text');

piedra.addEventListener('click', () => {
    jugar(PIEDRA)
});

papel.addEventListener('click', () => {
    jugar(PAPEL);
});

tijera.addEventListener('click', () => {
    jugar(TIJERA)
});

function jugar(userOption) {
    const machineOption = Math.floor(Math.random() * 3);
    const resultado = calcularResultado(userOption, machineOption);


    switch (resultado) {

        case ganar:
            resultText.innerHTML = (`La maquina ha elegido ${machineOption}, Ganaste!!!`)
            break;

        case perder:
            resultText.innerHTML = (`La maquina ha elegido ${machineOption},  Perdiste`)
            break;

        case empate:
            resultText.innerHTML = (`La maquina ha elegido ${machineOption}  Empate!!!, juega denuevo`)
            break;
    }

}


function calcularResultado(machineOption, userOption) {

    if (userOption === machineOption) {
        return empate;
    } else if (userOption === PIEDRA) {
        if (machineOption === TIJERA) return perder;
        if (machineOption === PAPEL) return ganar;

    } else if (userOption === PAPEL) {
        if (machineOption === PIEDRA) return perder;
        if (machineOption === TIJERA) return ganar;

    } else if (userOption === TIJERA) {
        if (machineOption === PAPEL) return perder;
        if (machineOption === PIEDRA) return ganar;
    }
}

