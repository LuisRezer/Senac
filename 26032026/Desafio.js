//Agora João necessita que seu sistema realize determinado fluxo quando o dia da semana seja domingo. Oque os sistema precisa para realizar determinado fluxo?

const hoje = new Date();
const diaSemana = hoje.getDay();

if (diaSemana === 0) {
    console.log("Executar fluxo de domingo");
}