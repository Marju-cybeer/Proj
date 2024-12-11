document.getElementById("send").addEventListener("click", adicionarDuvidas);


function adicionarDuvidas(){
    const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;


   if(!nome || !email || !telefone ){
        alert("Preencha todos os campos.")
        return
    }
    
    const listaDuvidas = []
    const novaDuvida = {nome, email, telefone}
    console.log(novaDuvida)
    listaDuvidas.push(novaDuvida)
     alert("Cadastro recebido com sucesso. Efetue o pagamento.")

    document.querySelector("form").reset();
}
