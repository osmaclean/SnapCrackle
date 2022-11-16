// SnapCrackle Tarefa 

function snapCrackle(maxValue) {
    let texto = ""
    for (let i = 1; i <= maxValue; i++) {
        if ((i  % 5 === 0) && (i % 2 == 1)) {
            texto += "SnapCrackle, "
        } else if (i  % 5 === 0) {
            texto += "Crackle, "
        } else if (i % 2 == 1) {
            texto += "Snap, "
        } else {
            texto += (i + ",")
           }
    }
    return texto
}

////////////////////////////////////

// Segundo Modo a ser feito

// function snapCrackle(maxValue) {
//     let texto = ""
//     let inn
//     for (inn = 1; inn <= maxValue; inn++) {
//         if( (inn % 5 === 0) && (inn % 2 !== 0)) {
//             texto += "SnapCrackle, "
//         } else if (inn  % === 0) {    
//                  texto += "Crackle, "
//              } else if (inn % 2 !== 0) {
//                      texto += "Snap, "
//                  } else {
//                        texto += (inn + ",")
//                      }
        
//     }
//     return texto
// }
// console.log(snapCrackle(100));

alert(`Page made by: Lucas Maclean.`);
alert(`Projeto consiste em usar os conhecimentos sobre: Arrays, Loops, Condicionais e Strings.`);
alert(`Tudo dentro do "Console"!`);

