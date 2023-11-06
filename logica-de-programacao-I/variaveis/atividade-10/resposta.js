
let userNameUsuaria = "thais_2023"
let senhaUsuaria = "123456"
let userNameAdmin = "admin"
let senhaAdmin = "123456"


let comparacaoUserName = (userNameUsuaria == userNameAdmin)
let comparacaoSenha = (senhaUsuaria == senhaAdmin)

let loginBemSucedido = (comparacaoUserName || comparacaoSenha)

console.log(`O login foi bem sucedido? ${loginBemSucedido}`)