```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numeroVezes = 0
  
  if(arrayDeNumeros.includes(numeroEscolhido)){
    for(const number of arrayDeNumeros){
    if(number === numeroEscolhido){
      numeroVezes ++
    }
  }
  return `O número ${numeroEscolhido} aparece ${numeroVezes}x`
} else{
  return `Número não encontrado`
}
}