function verificar(){
    var data = new Date()
    var ano = data.getFullYear()// pegando ano atual com 4 dígitos 
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){// se valor do comprimento do ano for 0 ou valor do ano for maior que ano atual 
        window.alert('[ERRO] Verifique os dados e tente novamente!')// mostre erro na tela como alerta
    } else {// se estiver tudo certo preencha outras informações
        var genero_masculino = document.getElementById('masculino')
        var genero_feminino = document.getElementById('feminino')
        var idade = ano - Number(fano.value)// valor de ano menos ano digitado
        var gênero = ''// var de genero vazia criada, será atribuida nas condições de checked abaixo
        var img = document.createElement('img')// criando elemento img, como se fosse uma div img
        img.setAttribute('id', 'foto')// setando o id foto na "div" criada para definirmos a id 'src' e 'foto' abaixo
        

        if (genero_masculino.checked){// se genero masculino estiver marcado
            gênero = 'Homem'// atribui a variante genero 'homem'
            
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imgs/bebe-m.jpg')// seta a imagem do endereço 
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'imgs/jovem-m.jpg')// seta a imagem do endereço 
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'imgs/adulto-m.jpg')// seta a imagem do endereço 
            }else {
                // Idodo
                img.setAttribute('src', 'imgs/idoso-m.jpg')// seta a imagem do endereço 
            }
        } else if (genero_feminino.checked){// se genero feminino estiver marcado
            gênero = 'Mulher'// atribui a variante genero 'homem'
            
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imgs/bebe-f.jpg')// seta a imagem do endereço 
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'imgs/jovem-f.jpg')// seta a imagem do endereço 
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'imgs/adulto-f.jpg')// seta a imagem do endereço 
            }else {
                // Idodo
                img.setAttribute('src', 'imgs/idoso-f.jpg')// seta a imagem do endereço 
            }
        }
        res.style.textAlign = 'center'// o resulado quero que centraliza
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`//escreva resultado da condição
        res.appendChild(img)// anexar filho no resultado
        img.style.marginTop = '10px'// para estilizar precisa ser junto o css 'marginTop
        img.style.borderRadius = '50%'// arredondando a foto
        
    }
}