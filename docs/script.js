document.addEventListener("DOMContentLoaded", function () {
    const nome = "Douglas Lima";
    const descricao = `Estou no sexto período da faculdade de Ciência da Computação. 
Tenho facilidade em trabalhar com programação e análise de dados, e criei este portfólio tanto para aprender e praticar quanto para apresentar meu conhecimento.  
<br><br>
Durante o desenvolvimento deste projeto, não tive grandes dificuldades, mas aprendi bastante e melhorei minhas habilidades técnicas.  
<br><br>
Atualmente, estou em busca de oportunidades na área de tecnologia. Se quiser entrar em contato, pode me encontrar no 
<a href="https://www.linkedin.com/in/douglas-lima-aa67b0243/" target="_blank">LinkedIn</a> ou acompanhar meus projetos no 
<a href="https://github.com/devdouglasglima/" target="_blank">GitHub</a>.`;

    let indexNome = 0;
    let indexDescricao = 0;
    const nomeElemento = document.getElementById("nome");
    const descricaoElemento = document.getElementById("descricao");
    const cursor = document.getElementById("cursor");

    function escreverNome() {
        if (indexNome < nome.length) {
            nomeElemento.innerHTML += nome.charAt(indexNome);
            indexNome++;
            setTimeout(escreverNome, 150);
        } else {
            setTimeout(escreverDescricao, 20);
        }
    }

    function escreverDescricao() {
        if (indexDescricao < descricao.length) {
            descricaoElemento.innerHTML = descricao.substring(0, indexDescricao + 1) + "<span id='cursor'>_</span>";
            indexDescricao++;
            setTimeout(escreverDescricao, 100);
        }
    }

    escreverNome();

    // Menu toggle
    document.querySelector(".menu-icon").addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("show");
    });
});
