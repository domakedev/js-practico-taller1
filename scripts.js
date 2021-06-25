const calcularAreaCuadrado = () => {
    let input = document.querySelector('#ladoCuadrado')
    let value = input.value
    let area = (value*value)+"cm²"


    let resultBox = document.querySelector('.areaResultado__text')

    console.log(resultBox);

    if (resultBox) {
        resultBox.remove()

    }


    let resultNode = document.createElement('p')
    resultNode.className = "areaResultado__text"

    let nodoPadre = document.querySelector('.areaResultado')

    nodoPadre.append(resultNode)

    resultBox = document.querySelector('.areaResultado__text')
    resultBox.append(area)
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
        calcularAreaCuadrado();
      }
    }))
  });