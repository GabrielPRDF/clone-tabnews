function somar(numberOne, numberTwo) {
  if (typeof numberOne != "number" || typeof numberTwo != "number") {
    return "Erro";
  }
  return numberOne + numberTwo;
}

exports.somar = somar;
