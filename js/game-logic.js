// All code should be written in this file.
//Player One's Variables
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//Player Two's Variables
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

let playerOneWins;
let playerTwoWins;

function isValidMoveType(moveType) {
  if (moveType == 'rock' || moveType == 'paper' || moveType == 'scissors') {
    return true;
  }
}

function isValidMoveValue(moveValue) {
  if (moveValue >= 1 && moveValue <= 99) {
    return true;
  }
}

function isValidMoveValueSum(valueOne, valueTwo, valueThree) {
  if (valueOne + valueTwo + valueThree <= 99) {
    return true;
  }
}

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
  if (
    !moveOneType ||
    !moveTwoType ||
    !moveThreeType ||
    !moveOneValue ||
    !moveTwoValue ||
    !moveThreeValue
  ) {
    return;
  }
  if (
    !isValidMoveType(moveOneType) ||
    !isValidMoveType(moveTwoType) ||
    !isValidMoveType(moveThreeType)
  ) {
    return;
  }
  if (
    !isValidMoveValue(moveOneValue) ||
    !isValidMoveValue(moveTwoValue) ||
    !isValidMoveValue(moveThreeValue) ||
    !isValidMoveValueSum(moveOneValue, moveTwoValue, moveThreeValue)
  ) {
    return;
  }

  switch (player) {
    case 'Player One':
      playerOneMoveOneType = moveOneType;
      playerOneMoveTwoType = moveTwoType;
      playerOneMoveThreeType = moveThreeType;

      playerOneMoveOneValue = moveOneValue;
      playerOneMoveTwoValue = moveTwoValue;
      playerOneMoveThreeValue = moveThreeValue;

    case 'Player Two':
      playerTwoMoveOneType = moveOneType;
      playerTwoMoveTwoType = moveTwoType;
      playerTwoMoveThreeType = moveThreeType;

      playerTwoMoveOneValue = moveOneValue;
      playerTwoMoveTwoValue = moveTwoValue;
      playerTwoMoveThreeValue = moveThreeValue;

    default:
      return;
  }
}

function getMoveWinner(
  playerOneMove,
  playerOneValue,
  playerTwoMove,
  playerTwoValue
) {
  if (!playerOneMove || !playerOneValue || !playerTwoMove || !playerTwoValue) {
    return null;
  }

  switch (playerOneMove) {
    case 'rock':
      if (playerTwoMove === 'rock') {
        if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else {
          return 'Player Two';
        }
      } else if (playerTwoMove === 'paper') {
        return 'Player Two';
      } else if (playerTwoMove === 'scissors') {
        return 'Player One';
      }
    case 'paper':
      if (playerTwoMove === 'paper') {
        if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else {
          return 'Player Two';
        }
      } else if (playerTwoMove === 'scissors') {
        return 'Player Two';
      } else if (playerTwoMove === 'rock') {
        return 'Player One';
      }
    case 'scissors':
      if (playerTwoMove === 'scissors') {
        if (playerOneValue > playerTwoValue) {
          return 'Player One';
        } else if (playerOneValue === playerTwoValue) {
          return 'Tie';
        } else {
          return 'Player Two';
        }
      } else if (playerTwoMove === 'rock') {
        return 'Player Two';
      } else if (playerTwoMove === 'paper') {
        return 'Player One';
      }
  }
}

function getRoundWinner(roundNumber) {
  switch (roundNumber) {
    case 1:
      return getMoveWinner(
        playerOneMoveOneType,
        playerOneMoveOneValue,
        playerTwoMoveOneType,
        playerTwoMoveOneValue
      );
    case 2:
      return getMoveWinner(
        playerOneMoveTwoType,
        playerOneMoveTwoValue,
        playerTwoMoveTwoType,
        playerTwoMoveTwoValue
      );
    case 3:
      return getMoveWinner(
        playerOneMoveThreeType,
        playerOneMoveThreeValue,
        playerTwoMoveThreeType,
        playerTwoMoveThreeValue
      );
    default:
      return null;
  }
}

function getGameWinner() {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoType ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeType ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }

  playerOneWins = 0;
  playerTwoWins = 0;

  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  if (roundOneWinner === 'Player One') {
    playerOneWins += 1;
  } else if (roundOneWinner === 'Player Two') {
    playerTwoWins += 1;
  }

  if (roundTwoWinner === 'Player One') {
    playerOneWins += 1;
  } else if (roundTwoWinner === 'Player Two') {
    playerTwoWins += 1;
  }

  if (roundThreeWinner === 'Player One') {
    playerOneWins += 1;
  } else if (roundThreeWinner === 'Player Two') {
    playerTwoWins += 1;
  }

  if (playerOneWins === playerTwoWins) {
    return 'Tie';
  } else if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else {
    return 'Player Two';
  }
}

function setComputerMoves() {
  const moves = ['rock', 'paper', 'scissors'];

  const moveOneType = moves[Math.floor(Math.random() * 3)];
  const moveTwoType = moves[Math.floor(Math.random() * 3)];
  const moveThreeType = moves[Math.floor(Math.random() * 3)];

  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;

  setPlayerMoves(
    'Player Two',
    moveOneType,
    moveOneValue,
    moveTwoType,
    moveTwoValue,
    moveThreeType,
    moveThreeValue
  );
}
