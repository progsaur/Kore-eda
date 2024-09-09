function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa")

let campoPesquisa = document.getElementById
("campo-pesquisa").value

if(!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado</p>"
return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descrição = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
    }
    console.log(dado.titulo.includes(campoPesquisa))

}

if (!resultados) {
resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados
}