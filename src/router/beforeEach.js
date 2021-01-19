

export default async (to, from, next) => {
    setDocumentTitle(to.name)
    checarEstaLogado(to, next)
    impedirAcessarLoginLogado(to, next)
    checarAutorizacao(to, next)
}

function setDocumentTitle(title) {
    document.title = `${title} - Gestão de Estoque`
}

function impedirAcessarLoginLogado(to, next) {
    console.log(to);
    console.log(next);
}
function checarEstaLogado(to,next) {
    console.log(to);
    console.log(next);
    
}

function checarAutorizacao(to,next) {
    console.log(to);
    next()
}