// //Kit energia Solar comprado

// function recebearrayeobjeto(array, string){
//     let array2 = []

//     array.forEach(element => {
//         if(element.nomedoobjeto.toUpperCase().indexOf(string.toUpperCase()) > -1){
//             array2.push(element)
//         }
//     })
//     return array2


//     // console.log(array.nomedoobjeto.indexof(string)
//     // cons
//     // for(let i = 0; i<array.length; i++){
//     //     if(string !== array[i].nomedoobjeto){
//     //         array.splice(i - 1, 1)
//     //         console.log("Posicao do i:", i)
//     //         console.log("Salve!")
//     //     }
//     // }
//     // return array

//     // for(let i = 0; i< array.length; i++){
//     //     for(let x = 0; x < array[i].itensdoobjeto.length; x++){
//     //         if(array[i].nomedoobjeto[x] === string){
//     //             console.log("Opa:", array[i].nomedoobjeto[x])
//     //             return array[i].nomedoobjeto[x]
//     //         }
//     //     }
//     // }
// }

// function recebeobjeto(objeto){//funcao pra salvar tudo em uma string
//     console.log("-------------------")
//     let stringnomedoobjeto = "\nO nome do objeto é: " + objeto.nomedoobjeto
//     let stringgeracaodoobejto = "\nA geração do objeto é: " + objeto.geracaodoobjeto1
//     let stringpossuisistema = ""
//     if(objeto.possuisistemaobjeto1){
//         stringpossuisistema = "\nO obejto possui sistema contra surtos."
//     }
//     else{
//         stringpossuisistema = "\nO obejto não possui sistema contra surtos."
//     }
//     return  stringnomedoobjeto + stringgeracaodoobejto + stringpossuisistema
// }

// //declaracao dos itens

// const marcadopainel1 = "jinko"
// const geracaopormes1 = 450
// const possuisistemacontrasurto1 = true
// const itensamaisdokit1 = ["Painel solar jinko, ", "Inversor growat, ", "Suporte de apoio, ", "Sistema anti-surto."]
// const aumentaletra1 = marcadopainel1.toLocaleUpperCase()

// const marcadopainel2 = "canadian"
// const geracaopormes2 = 560
// const possuisistemacontrasurto2 = false
// const itensamaisdokit2 = ["painel solar canadian, ", "inversor fronius, ", "suporte de apoio."]
// const aumentaletra2 = marcadopainel2.toLocaleUpperCase()

// const marcadopainel3 = "Trina"
// const geracaopormes3 = 420
// const possuisistemacontrasurto3 = true
// const itensamaisdokit3 = ["painel solar Trina, ", "inversor growat, ", "suporte de apoio, ", "sistema anti-surto."]
// const aumentaletra3 = marcadopainel3.toLocaleUpperCase()

// const mediadegeracao = (geracaopormes1 + geracaopormes2 + geracaopormes3) / 3//media da geracao
// const verificacaodeseguranca = possuisistemacontrasurto1 && possuisistemacontrasurto2 && possuisistemacontrasurto3//verificacao de seguracan
// const guardainformacoesdoskits = [itensamaisdokit1, itensamaisdokit2, itensamaisdokit3]//array pra guardar os kits

// console.log(mediadegeracao.toFixed(2))
// console.log(verificacaodeseguranca)
// console.log(aumentaletra1,'\n', `Geração: ${geracaopormes1}\n`,`Possui sistema solar? ${possuisistemacontrasurto1}\n`, `Itens do kit: ${itensamaisdokit1}\n\n`,aumentaletra2,'\n', `Geração: ${geracaopormes2}\n`,`Possui sistema solar? ${possuisistemacontrasurto2}\n`, `Itens do kit: ${itensamaisdokit2}\n\n`, aumentaletra3,'\n', `Geração: ${geracaopormes3}\n`,`Possui sistema solar? ${possuisistemacontrasurto3}\n`, `Itens do kit: ${itensamaisdokit3}\n`,)


// //passando os itens do kit para 1 string só
// let novastring1 = ""
// let novastring2 = ""
// let novastring3 = ""

// for(let i = 0; i < itensamaisdokit1.length; i++){
//     novastring1 = novastring1 + itensamaisdokit1[i]
// }


// for(let i = 0; i < itensamaisdokit2.length; i++){
//     novastring2 = novastring2 + itensamaisdokit2[i]
// }


// for(let i = 0; i < itensamaisdokit3.length; i++){
//     novastring3 = novastring3 + itensamaisdokit3[i]
// }



// //declarando novos objetos
// const objeto1 = {
//     nomedoobjeto: "jinko",
//     geracaodoobjeto1: 450,
//     possuisistemaobjeto1: true,
//     itensdoobjeto: ["Painel solar jinko, ", "Inversor growat, ", "Aplicativo."] 
// }

// const objeto2 = {
//     nomedoobjeto: "canadian",
//     geracaodoobjeto2: 560,
//     possuisistemaobjeto2: false,
//     itensdoobjeto : ["Painel solar canadian, ", "Inversor fronius, ", "Suporte de apoio."]
// }

// const objeto3 = {
//     nomedoobjeto: "Trina",
//     geracaodoobjeto3: 420, 
//     possuisistemaobjeto3: true,
//     itensdoobjeto: ["Painel solar Trina, ", "Inversor growat, ", "Sistema anti-surto."]
// }

// const arraypraguardaosobjeto = []

// arraypraguardaosobjeto.push(objeto1,objeto2,objeto3)//colocando os objetos declarados em 1 vetor
// console.log(arraypraguardaosobjeto)

// const stringcomdetalhes = recebeobjeto(objeto1)

// console.log(stringcomdetalhes)

// for(obj of arraypraguardaosobjeto){//printa as tudo dos objetos usando for
//     for(propriedade in obj){
//         console.log(`${propriedade}: ${obj[propriedade]}`)
//     }
//     console.log("------------------")
// }

// const alterar = confirm("Deseja alterar o objeto 3, pelo novo objeto que ja temos cadastrado?")//criando 1 interacao com o usuario

// if(alterar){
//     arraypraguardaosobjeto.pop()
//     const novoobjeto3 = {
//         nomedonovoobjeto3 : "Growat",
//         geracaodonovoobjeto3 : 640,
//         possuisistemanovoobjeto3: true
//     }
//     arraypraguardaosobjeto.push(novoobjeto3)
//     alert("Item foi alterado.")
// }
// else{
//     alert("Item não foi alterado.")
// }

// const adicionar = confirm("Deseja adicionar 1 novo objeto?")//criando 1 interacao com o usuario

// if(adicionar){
//     const novoobjeto4 = {
//         nomedonovoobjeto4 : prompt("Digite o nome do novo objeto:"),
//         geracaodonovoobjeto4 : +(prompt("Digite a geração do novo objeto:")),
//         possuisistemanovoobjeto4: confirm("O novo objeto possui sistema contra surto?")
//     }
//     arraypraguardaosobjeto.push(novoobjeto4)
//     alert("Novo objeto foi adicionado.")
// }
// else{
//     alert("Não foi adicionado nada.")
// }

// const stringaserpassada = "Trina"

// let objetocomarray = recebearrayeobjeto(arraypraguardaosobjeto, stringaserpassada)
// console.log("Imprimindo o objeto:",objetocomarray)

