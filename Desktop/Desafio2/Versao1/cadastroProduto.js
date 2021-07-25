let form = document.getElementById('formularioCadastroProduto');

const items = JSON.parse(localStorage.getItem('produto'));
const itensCategoria = JSON.parse(localStorage.getItem('categoriaProduto'));

if (items !== null) {
    renderItem(items)
}

if (itensCategoria !== null) {
    var comboCategoria = document.getElementById("cboCategoria");

    for (posicao = 0; posicao < itensCategoria.length; posicao++) {
        var opt0 = document.createElement("option");
        opt0.value = posicao;
        opt0.text = itensCategoria[posicao];
        comboCategoria.add(opt0, comboCategoria.options[posicao]);
    }

    var opt0 = document.createElement("option");
    opt0.value = itensCategoria.length;
    opt0.text = "Sem categoria";
    comboCategoria.add(opt0, comboCategoria.options[itensCategoria.length]);
} else {
    alert('Nenhuma categoria cadastrada!')
    var comboCategoria = document.getElementById("cboCategoria");
    var opt0 = document.createElement("option");
    opt0.value = 0;
    opt0.text = "Sem categoria";
    comboCategoria.add(opt0, comboCategoria.options[0]);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nomeProduto').value;
    let categoria = comboCategoria.options[comboCategoria.selectedIndex].text;
    let valor = document.getElementById('valorProduto').value;

    let dados = {
        nome,
        categoria,
        valor
    };

    let valoresDados = Object.values(dados);

    if (localStorage.getItem('produto') === null) {
        // Adicionando um array com um objeto no localstorage
        localStorage.setItem('produto', JSON.stringify([valoresDados]));
    } else {
        // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
        localStorage.setItem(
            'produto',
            // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
            JSON.stringify([
                ...JSON.parse(localStorage.getItem('produto')),
                valoresDados
            ])
        );
    }
    const items = JSON.parse(localStorage.getItem('produto'));
    renderItem(items)
});

function renderItem(item) {
    var Table = document.getElementById("tabelaProdutoCadastrado");
    Table.innerHTML = "";

    let tbody = document.getElementById('tabelaProdutoCadastrado');

    /*item.forEach(valor => {
        let tr = document.createElement('tr');
        tbody.append(tr);
        tr.append(valor[0]);

        let td = document.createElement('td');
        tr.append(td);
        td.append(valor[1]);
    });*/

    for (linha = 0; linha < item.length; linha++)
    {
        novaLinha = tbody.insertRow(linha);
        for (coluna = 0; coluna < 3; coluna++)
        {
            novaCelula = novaLinha.insertCell(coluna);
            novaCelula.innerHTML = item[linha][coluna];
        }
    }
}


