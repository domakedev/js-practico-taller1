const calcularAreaCuadrado = () => {
  let input = document.querySelector("#ladoCuadrado");
  let value = input.value;
  let area = value * value + "cm²";

  let resultBox = document.querySelector(".areaResultado__text");
  
  if (resultBox) {
    resultBox.remove();
  }

  let resultNode = document.createElement("p");
  resultNode.className = "areaResultado__text";

  let nodoPadre = document.querySelector(".areaResultado");

  nodoPadre.append(resultNode);

  resultBox = document.querySelector(".areaResultado__text");
  resultBox.append(area);
};

const calcularAlturaTriangle = () => {
  let ladoA = document.querySelector("#ladoTriangleA");
  let valueA = ladoA.value;

  let ladoB = document.querySelector("#ladoTriangleB");
  let valueB = ladoB.value;

  let ladoC = document.querySelector("#ladoTriangleC");
  let valueC = ladoC.value;

  let base, ladoIgual, alturaTriangle;

  printAlert("");

  if (valueA > 0 && valueB > 0 && valueC > 0) {
    // console.log(valueA+valueB+valueC);
    if (valueA == valueB || valueA == valueC || valueB == valueC) {
      if (valueA == valueB) {
        ladoIgual = valueA;
        base = valueC;

        if (ladoIgual * 2 <= base) {
          printAlert("Tu triangulo es imposible");
        } else if (ladoIgual * 2 >= base) {
          alturaTriangle = Math.sqrt(
            ladoIgual * ladoIgual - (base / 2) * (base / 2)
          );
          printResult(alturaTriangle);
        }
      } else if (valueA == valueC) {
        ladoIgual = valueA;
        base = valueB;

        if (ladoIgual * 2 <= base) {
          printAlert("Tu triangulo es imposible");
        } else if (ladoIgual * 2 >= base) {
          alturaTriangle = Math.sqrt(
            ladoIgual * ladoIgual - (base / 2) * (base / 2)
          );
          printResult(alturaTriangle);
        }
      } else if (valueB == valueC) {
        ladoIgual = valueB;
        base = valueA;

        if (ladoIgual * 2 <= base) {
          printAlert("Tu triangulo es imposible");
        } else if (ladoIgual * 2 >= base) {
          alturaTriangle = Math.sqrt(
            ladoIgual * ladoIgual - (base / 2) * (base / 2)
          );
          printResult(alturaTriangle);
        }
      }
    } else {
      printAlert("No hay 2 lados iguales")
    }
  } else {
    console.log("Uno de los valores es menor que cero");
  }
};

//Previene que se envie la data al presionar ENTERN
//en todos los input
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input").forEach((node) =>
    node.addEventListener("keypress", (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        // calcularAreaCuadrado();
      }
    })
  );
});

const printResult = (info) => {
  let resultBoxT = document.querySelector(".areaResultadoT__text");
  if (resultBoxT) {
    resultBoxT.remove();
  }
  let createRBT = document.createElement("p");
  createRBT.className = "areaResultadoT__text";
  createRBT.append(info.toFixed(3) + "cm");
  let nodoPadre = document.querySelector(".areaResultadoT");
  nodoPadre.append(createRBT);
};

const printAlert = (info) => {

  limpiarPrints();

  let createRBT = document.createElement("p");
  createRBT.className = "areaResultadoT__textAlert";
  createRBT.append(info);
  let nodoPadre = document.querySelector(".areaResultadoT");
  nodoPadre.append(createRBT);
};

const limpiarPrints = () => {
  let resultadoNum=document.querySelector('.areaResultadoT__text');
  let textAlert=document.querySelector('.areaResultadoT__textAlert');

  if (resultadoNum) {
    resultadoNum.remove()
  }
  if (textAlert) {
    textAlert.remove()
  }
}
