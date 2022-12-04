alert('Inicio el Juego')
alert('Elije tu ataque ps')

let player = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijera')

if (player ==0){
    alert('elejiste piedra')
} else if (player == 1){
    alert('elejiste papel')
} else if(player == 2){
    alert('elegiste tijera')
}

let enemy = Math.round(Math.random() * 2)

if (enemy == 0){
    alert('el otro tarao eligio piedra')
} else if (enemy == 1){
    alert('el otro tarao eligio papel')
} else if (enemy == 2){
    alert('el otro tarao eligio tijera')
}

if (player == enemy){
    alert('empate pipipi')
} else if(player == 0 && enemy == 2){
    alert('ganaste chamo gaaa')
} else if(player == 1 && enemy == 0){
    alert('ganaste chamo gaaa')
} else if(player == 2 && enemy == 1){
    alert('ganaste chamo gaaa')
} else {
    alert('perdiste pipipi')
}
