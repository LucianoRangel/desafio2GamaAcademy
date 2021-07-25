let form = document.getElementById('formularioCadastroCliente');

const items = JSON.parse(localStorage.getItem('cliente'));

if (items !== null) {
    renderItem(items)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nomeCliente').value;
    let endereco = document.getElementById('enderecoCliente').value;

    let dados = {
        nome,
        endereco
    };

    let valoresDados = Object.values(dados);

    if (localStorage.getItem('cliente') === null) {
        // Adicionando um array com um objeto no localstorage
        localStorage.setItem('cliente', JSON.stringify([valoresDados]));
    } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
            'cliente',
            // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
            JSON.stringify([
                ...JSON.parse(localStorage.getItem('cliente')),
                valoresDados
            ])
        );
    }
    const items = JSON.parse(localStorage.getItem('cliente'));
    renderItem(items)
});

function renderItem(item) {
    var Table = document.getElementById("tabelaClienteCadastrado");
    Table.innerHTML = "";

    let tbody = document.getElementById('tabelaClienteCadastrado');

    item.forEach(valor => {
        let tr = document.createElement('tr');
        tbody.append(tr);
        tr.append(valor[0]);

        let td = document.createElement('td');
        tr.append(td);
        td.append(valor[1]);
    });
}


