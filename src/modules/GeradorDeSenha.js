class GeradorDeSenha {
    constructor() {
        this.form = document.querySelector('form')
        this.filtra_forumario()
        this.copia_senha()
    }

    filtra_forumario() {
        let alfabeto = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
        let alfabeto_mai = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'];
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];      

        let gera_ = this.gera_senha

        this.form.onsubmit = function(e) {
            e.preventDefault()

            let tamanhoSenha = document.querySelector('#input-quantDeCarct').value
            let arra = [];

            let rand = (max, min) => Math.floor(Math.random() * (max - min) + max);
            let gera_maiuscula = () => String.fromCharCode(rand(65, 91));
            let gera_minuscula = () => String.fromCharCode(rand(97, 122));
            let gera_numeros = () => String.fromCharCode(rand(48, 57))
            let simbolos = ['+', '-', '_', '=', '<', '>', '^', '*', '$', '@', '#', '%', '$'];
            let gera_simbolos = () => simbolos[rand(0, simbolos.length)]

            for(let i of e.target) {
                if(i.id.includes('add')) {
                    if(i.checked) arra.push(i.id)
                    
                }

                // arra.push(i.checked)
                // console.log(i.id)
                // if(i.checked.includes(false)) {
                //     // console.log(i.id)
                // }
            }

            console.log(arra)
            console.log(gera_minuscula())

            let arrayTipoDeSenha = [];
            for(let i of arra) {
                
                if(i.includes('nums')) arrayTipoDeSenha.push(...nums)
                if(i.includes('maius')) arrayTipoDeSenha.push(...alfabeto_mai)
                if(i.includes('min')) arrayTipoDeSenha.push(...alfabeto)
                if(i.includes('simb')) arrayTipoDeSenha.push(...simbolos)

                // if(i.includes('nums')) arrayTipoDeSenha.push(gera_numeros())
                // if(i.includes('maius')) arrayTipoDeSenha.push(gera_maiuscula())
                // if(i.includes('min')) arrayTipoDeSenha.push(gera_minuscula())
                // if(i.includes('simb')) arrayTipoDeSenha.push(gera_simbolos())
                
            }

            console.log(arrayTipoDeSenha)
            gera_(arrayTipoDeSenha, tamanhoSenha)
           
        }
    }



    gera_senha(tipoSenha, tam) {
        let num_ale = [];

        for(let i = 0; i < tam; i++) {
            num_ale.push(tipoSenha[Math.floor(Math.random() * tipoSenha.length)])
            // num_ale.push(tipoSenha)
        }

        document.querySelector('#result').value = num_ale.join('')
        console.log(num_ale.join(''))


    }





    copia_senha() {
        document.querySelector('#copiar_text').addEventListener('click', function() {
            let texto_copiado = document.querySelector('#result');
        
            texto_copiado.select()
            texto_copiado.setSelectionRange(0, 99999);
        
            document.execCommand("copy") 
            alert('Copiado' + texto_copiado.value)
        })
    }


}

const call = new GeradorDeSenha()


