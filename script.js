const player = (name, marker) => {
    return {
    name,
    marker,
    }
};

const gameBoardModule = (function() {  
    let player1 = player('name', 'X');
    let player2 = player('name', 'O');
    let gameBoard = [];
    
    gameBoard.push(player1, player2)
    return {gameBoard};
})();

const controlGame = (function() {
    const allSquares = Array.from(document.querySelectorAll('.box'))
    let display = document.querySelector('.display');
    let playerOne = document.querySelector('#score-one');
    let playerTwo = document.querySelector('#score-two');

    const addScore = () => {
        if(display.textContent === 'X wins the game') {
            playerOne.textContent++

        }else if(display.textContent === 'O wins the game') {
            playerTwo.textContent++
        }
    }

    const removeEvent = () => {
        allSquares.forEach(square => {
            square.style.pointerEvents = 'none';
             return;
            })
    }

    const checkWin = function() {  
        if(allSquares[0].textContent === 'X' && allSquares[1].textContent ==='X' && allSquares[2].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[1].textContent === 'O' && allSquares[2].textContent === 'O') {
           let matched = allSquares.slice(0, 3);
           display.textContent = `${allSquares[1].textContent} wins the game` 
           display.style.color = 'rgb(241, 235, 156)';
           display.style.fontSize = '25px';
           addScore();
           removeEvent();
           matched.forEach(match => {
            match.style.backgroundColor = 'rgb(241, 235, 156)'
           })   
          
        }else if(allSquares[3].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[5].textContent === 'X' || allSquares[3].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[5].textContent === 'O'){
            let matched = allSquares.slice(3, 6);
            display.textContent = `${allSquares[3].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)'
            display.style.fontSize = '25px'
            addScore()
            removeEvent()
            matched.forEach(match => {
                match.style.backgroundColor = 'rgb(241, 235, 156)'
               })

        }else if(allSquares[6].textContent === 'X' && allSquares[7].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[6].textContent === 'O' && allSquares[7].textContent === 'O' && allSquares[8].textContent === 'O'){
            let matched = allSquares.slice(6, 9);
            display.textContent = `${allSquares[6].textContent} wins the game`;
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            addScore();
            removeEvent();
            matched.forEach(match => {
                match.style.backgroundColor = 'rgb(241, 235, 156)'
               })

        }else if(allSquares[0].textContent === 'X' && allSquares[3].textContent === 'X' && allSquares[6].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[3].textContent === 'O' && allSquares[6].textContent === 'O'){
            display.textContent = `${allSquares[0].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            allSquares[0].style.backgroundColor = 'rgb(241, 235, 156)';
            allSquares[3].style.backgroundColor =  'rgb(241, 235, 156)';
            allSquares[6].style.backgroundColor = 'rgb(241, 235, 156)';
            addScore();
            removeEvent();

        }else if(allSquares[1].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[7].textContent === 'X' || allSquares[1].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[7].textContent === 'O'){
            display.textContent = `${allSquares[1].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            allSquares[1].style.backgroundColor = 'rgb(241, 235, 156)';
            allSquares[4].style.backgroundColor =  'rgb(241, 235, 156)';
            allSquares[7].style.backgroundColor = 'rgb(241, 235, 156)';
            addScore();
            removeEvent();

        } else if(allSquares[2].textContent === 'X' && allSquares[5].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[2].textContent === 'O' && allSquares[5].textContent === 'O' && allSquares[8].textContent === 'O') {
            display.textContent = `${allSquares[2].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            allSquares[2].style.backgroundColor = 'rgb(241, 235, 156)';
            allSquares[5].style.backgroundColor =  'rgb(241, 235, 156)';
            allSquares[8].style.backgroundColor = 'rgb(241, 235, 156)';
            addScore();
            removeEvent();

        } else if(allSquares[0].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[8].textContent === 'X' || allSquares[0].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[8].textContent === 'O') {
            display.textContent = `${allSquares[0].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            allSquares[0].style.backgroundColor = 'rgb(241, 235, 156)';
            allSquares[4].style.backgroundColor =  'rgb(241, 235, 156)';
            allSquares[8].style.backgroundColor = 'rgb(241, 235, 156)';
            addScore();
           removeEvent();

        }else if(allSquares[2].textContent === 'X' && allSquares[4].textContent === 'X' && allSquares[6].textContent === 'X' || allSquares[2].textContent === 'O' && allSquares[4].textContent === 'O' && allSquares[6].textContent === 'O') {
            display.textContent = `${allSquares[2].textContent} wins the game`
            display.style.color = 'rgb(241, 235, 156)';
            display.style.fontSize = '25px';
            allSquares[2].style.backgroundColor = 'rgb(241, 235, 156)';
            allSquares[4].style.backgroundColor =  'rgb(241, 235, 156)';
            allSquares[6].style.backgroundColor = 'rgb(241, 235, 156)';
            addScore();
            removeEvent();

        }else if(allSquares.every(square => square.textContent !== '')){
            display.textContent = "IT'S A DRAW";
            display.style.color = 'white';
            display.style.fontSize = '25px';
        }  
    }

    return{checkWin,
           playerOne,
           playerTwo
        }
})();

const controlDisplay = (function() {
    let turnToPlay = true;
    const allSquares = Array.from(document.querySelectorAll('.box'));
    let display = document.querySelector('.display');
    
    function addMark() {
        allSquares.forEach(square => {  

            square.addEventListener('click', () => {        
            
                if(square.textContent !== "") return
                if(turnToPlay) {
                square.textContent = gameBoardModule.gameBoard[0].marker
                display.textContent = `Is ${gameBoardModule.gameBoard[1].marker}'s turn to play`
                display.style.fontSize = '25px'  ; 
                turnToPlay = false;
                controlGame.checkWin();
                refreshBoard();
                
                }else{ 
                    square.textContent = gameBoardModule.gameBoard[1].marker
                    display.textContent = `Is ${gameBoardModule.gameBoard[0].marker}'s turn to play`
                    display.style.fontSize = '25px';   
                    turnToPlay = true;
                    controlGame.checkWin();
                    refreshBoard();            
            } 
        })          
      })
    }
    addMark();

    const refresh = function() {
        display.textContent = '';
        display.style.color = 'initial';
        allSquares.forEach(square => {
        square.textContent = '';
        square.style.pointerEvents = 'fill';
        square.style.backgroundColor = 'white';   
        })        
    }

    const refreshBoard = function() {
        const button = document.querySelector('button')
        button.addEventListener('click', refresh);
    }  

    return{display,
        allSquares,
        refreshBoard,
        addMark         
          }          
})();




