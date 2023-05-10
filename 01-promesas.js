console.log('[--- 01-Promesas I20203TN066 ---]');

function sumarUno(numero, callback) {
    if(numero >= 7) {
        callback("Numero grande");
        return;
    }
    setTimeout(() => {
        callback(null, numero + 1);
    }, 2000);
}

sumarUno(5, (err, succ) => {
    console.log(err ? err : succ);
    if(err) {
        return;
    }
});