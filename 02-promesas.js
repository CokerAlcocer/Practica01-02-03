console.log('[--- 02-Promesas I20203TN066 ---]');

function sumarUnoPromesa(numero) {
    let promesa = new Promise((res, rej) => {
        if(numero >= 7) {
            rej("Numero grande");
            return;
        }
        setTimeout(() => {
            console.log(numero);
            res(numero + 1);
        }, 2000);
    });

    return promesa;
}

sumarUnoPromesa(5)
.then(sumarUnoPromesa)
.then(sumarUnoPromesa)
.catch(err => console.log(err));