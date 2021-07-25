let form = document.getElementById('formularioCadastroCategoriaProduto');

const items = JSON.parse(localStorage.getItem('categoriaProduto'));

if (items !== null) {
    renderItem(items)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nomeCategoria').value;

    let dados = {
        nome
    };

    let valoresDados = Object.values(dados);

    if (localStorage.getItem('categoriaProduto') === null) {
        // Adicionando um array com um objeto no localstorage
        localStorage.setItem('categoriaProduto', JSON.stringify([valoresDados]));
    } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
            'categoriaProduto',
            // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
            JSON.stringify([
                ...JSON.parse(localStorage.getItem('categoriaProduto')),
                valoresDados
            ])
        );
    }
    const items = JSON.parse(localStorage.getItem('categoriaProduto'));
    renderItem(items)
});

function renderItem(item) {
    var Table = document.getElementById("tabelaCategoriaCadastrada");
    Table.innerHTML = "";

    let tbody = document.getElementById('tabelaCategoriaCadastrada');

    item.forEach(valor => {
        let tr = document.createElement('tr');
        tbody.append(tr);
        tr.append(valor);
    });
}


