class UsuarioRepositorio{
    constructor(){
        this._contascadastradas = [];
    }

    cadastrar(usuario){
        this._contascadastradas.push(usuario);

    }

    listar(){
        return this._contascadastradas;
    }
    
    logar(usuario){

        let email = usuario._nome;
        let senhaa = usuario._senha;

        let capturado;
        for(let i = 0; i < this._contascadastradas.length; i++){
            let usuariox = this._contascadastradas[i];

            if(email == usuariox._nome && senhaa == usuariox._senha){
                capturado = usuariox;
                return capturado
                
            }


        }  
        return undefined;
    }

    remover (usuario){
        let 


    }
 
}