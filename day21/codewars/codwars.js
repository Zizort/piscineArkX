function isSolved(board) {
    // TODO: Check if the board is solved!
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] != 0 && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
        return board[i][0];
        }
      if (board[0][i] != 0 && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
        return board[0][j];
      }
      
    }
    if (board[1][1] != 0 && board[1][1] == board[0][2] && board[1][1] == board[2][0]) {
      return board[1][1];
    }
    if (board[1][1] != 0 && board[1][1] == board[2][2] && board[1][1] == board[0][0]) {
      return board[1][1];
    }
    for ( let i = 0; i < board.length; i++) {
      if (board[i][0] == 0 || board[i][1] == 0 || board[i][2] == 0)
        return -1;
    }
      return 0;
    
  }