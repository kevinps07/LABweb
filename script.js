function openHiddenContent(){
    let btnLike= document.querySelector('.btnLike');

    // Verificação de segurança (Boa Prática): Se o elemento não for encontrado, encerra a função.
    if (!btnLike) {
        console.error("Elemento .btnLike não encontrado!");
        return;
    }

    // 2. Ação: Mudando o estilo (atribuindo a string CSS correta)
    // 'tomato' é mais simples, mas 'rgba(...)' também funciona se estiver entre aspas.
   console.log("Gostei demais");

}


function openWind(id){

    const pages = {
        'posts': 'PgPosts.html',
        'cancelPost': '/'
    };

    let element = document.getElementById(id);
    if(!element){
        console.error("Ocorreu um erro ao tentar localizar: "+ id);
        return;
    }

    (pages[element.id] === pages[id])? window.location.href = pages[id]: console.error('Não foi possível realizar esta ação,tente novamente mais tarde.');

}