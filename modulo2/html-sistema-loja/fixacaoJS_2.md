```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  menosMaca = 1.30
  maisMaca = 1.00
  if(quantidade >= 12){
    return maisMaca * quantidade
  } else{
    return menosMaca * quantidade
  }
}
