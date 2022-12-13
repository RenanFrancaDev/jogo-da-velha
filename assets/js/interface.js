// Quando a página for carregada, o loop nos espaçoes é feito para a "captura", para adicionar o evento de click em todos.

document.addEventListener("DOMContentLoaded", () => {

let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
    square.addEventListener("click", handleClick);
    })

})

//Configurando a função click

function handleClick(event){

    let square = event.target;
    let position = square.id;

   if (handleMove(position)) {

    setTimeout(() => {
    alert("O jogo acabou - O Vencedor foi " + player)}, 10)
   }
    updateSquare(position);
}

    function updateSquare(position){
        let square = document.getElementById(position.toString());
        let classSymbol = board[position];
        square.innerHTML = `<div class="${classSymbol}"></div>`
    }

    function restart(){
        

        let squares = document.querySelectorAll(".square")

            squares.forEach((square)=>{
                let position = square.id;
                let symbol = board[position];
        
                if (symbol !="") {
                    square.innerHTML = `<div class=""></div>`
                }
            })
           
    }
    

