var ano = 2024;

function eAnoBissexto(ano) {
  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      if (ano % 400 === 0) {
        console.log("É bissexto");
      } else {
        console.log("Não é bissexto");
      }
    } else {
      console.log("É bissexto");
    }
  } else {
    console.log("Não é bissexto");
  }
}
