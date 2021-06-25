const calcularAreaCuadrado = () => {
    let input = document.querySelector('#ladoCuadrado')
    let value = input.value

    alert(`El area de tu cuadrado es: ${value*value}`)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
        calcularAreaCuadrado();
      }
    }))
  });