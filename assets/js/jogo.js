let board = ["","","","","","","","","",];
let playerTime = 0;
let symbols = ["o","x"];
let gameOver = false;
let player;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
 
function handleMove(position){

    
    if(gameOver){
    return;
    }

    // Criando a movimentação do jogo...
    // 1 - Se a posição, informada no click, estiver vazia, irá receber um simbolo
    // 2 - Simbolo será indicado de acordo com o playerTime

    if (board[position] ==""){
        board[position] = symbols[playerTime];
        gameOver = isWin();
        console.log(gameOver)
        if (gameOver == false){
            // Versao Ternaria
            // Se o Player1 jogou a vez passa para o Player2
            playerTime = (playerTime == 0)?1:0;
            player = (playerTime == 0)? 'Player 1' : 'Player 2'
        }     
    }
        return gameOver;
}
    
function isWin() {


    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if(board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ""){
                return true;
            }

    }

    return false;

}





