  function verificar() {
            let data = new Date()
            let ano = data.getFullYear()
            let fano = document.getElementById('txtano')
            let res = document.getElementById('res')
            let img = document.createElement('img') // cria uma imagem dinamica com JS
            img.setAttribute('id', 'foto') // atribui um id 'foto' ao elemento criado

            if (fano.value == 0 || fano.value > ano) {
                window.alert('Verifique os dados e tente novamente.')
            } else {

                let fsex = document.getElementsByName('radsex')
                let idade = ano - Number(fano.value)
                let genero = ''
                
                if (fsex[0].checked) {
                  genero = 'homem'  
                  
                    if (idade >= 0 && idade < 10) {
                      img.setAttribute('src', './images/criança-homem.jpg')  
                    } else if (idade < 21) {
                       img.setAttribute('src', './images/jovem-homem.jpg') 
                    } else if (idade < 50) {
                        img.setAttribute('src', './images/adulto-homem.jpg')
                    } else if(idade > 110) {
                      img.setAttribute ('src', './images/morto-2.jpg')
                    }
                     else {
                        img.setAttribute('src', './images/idoso-homem.jpg')
                    }
                  

                } else {
                  genero = 'mulher'
                    if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', './images/criança-mulher.jpg')
                        
                    } else if (idade < 21) {
                        img.setAttribute('src', './images/jovem-mulher.jpg')
                    
                    } else if (idade < 50) {
                        img.setAttribute('src', './images/adulta-mulher.jpg')
                    
                    } else if(idade > 110) {
                      img.setAttribute ('src', './images/morto-2.jpg')
                    }
                     else {
                      img.setAttribute('src', './images/idosa-mulher.jpg')
                    }
                  
                }

                res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
                res.appendChild(img)
             
        }
  }