let alunoCerto = {
    nome: "Caua Queiroz Guerra", 
    idade: 17,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "1111111"
}

let alunoErrado = {
    nome: "Joao Caio", 
    idade: 13,
    cursando: ["TIA", "PDM"],
    presença: ["2022-01-01"],
    ra: "2222222"
}

function validaCadastro(aluno){

    if(aluno.nome.length < 10){
        nomeValidado = "Erro: O nome do aluno deve ter no mínimo 10 caracteres";   
        aluno.nome = 1;
    }else{
        nomeValidado = aluno.nome
    }
    if(aluno.idade < 15){
        idadeValidado = "Erro: A idade do aluno deve ser maior que 14";   
        aluno.idade = 2;
    }else{
        idadeValidado = aluno.idade
    }
    if(aluno.cursando.length < 3){
        cursandoValidado = "Erro: O aluno deve estar cursando no mínimo 3 matéria";   
        aluno.cursando = 3;
    }else{
        cursandoValidado = aluno.cursando
    }
    if(aluno.presença.length < 2){
        presençaValidado = "Erro: O aluno deve ter no mínimo 2 presenças";   
        aluno.presença = 4;
    }
    else{
        presençaValidado = aluno.presença
    }
    if(aluno.ra.length != 7){   
        raValidado = "Erro: O aluno deve ter no mínimo 2 presenças";
        aluno.ra = 5
    }else{
       raValidado = aluno.ra
    }

    if(aluno.nome === 1 || aluno.idade === 2 || aluno.cursando === 3 || aluno.presença === 4 || aluno.ra === 5){
    return alunoValidado = {
        status: "invalid",
        message: "Cadastro Inválido por:",
        nomeValidado, 
        idadeValidado,
        cursandoValidado,
        presençaValidado,
        raValidado
    }
    }else{
        return alunoValidado = {
            status: "valid",
            message: "Cadastro válido",
            nome: aluno.nome, 
            idade: aluno.idade,
            cursando: aluno.cursando,
            presença: aluno.presença,
            ra: aluno.ra
        }
    }
}

validaCadastro(alunoCerto)
console.log(alunoValidado)
validaCadastro(alunoErrado)
console.log(alunoValidado)