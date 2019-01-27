
// var table = ['','','',
//              '','','',
//              '','','',]

             // create an object
             // that has the cell id as the key
             // and the value for the key as the value in the cell on the screen
             var inputTable = { 
                 0: "tyjojk",
                 1: "jghojk",
                 2: "toghjk",
                 3: "tyhljk",
                 4: "tyjgk",
                 5: "tyjjk",
                 6: "tyhjk",
                 7: "tghjk",
                 8: "jghjk",
                }

var currentUser = 'X'
// FIND WINNER OF GAME
var checkResult = function(){
    
    
  if((inputTable[0] === inputTable[1]) && (inputTable[0] === inputTable[2]) 
  ||(inputTable[0] === inputTable[4]) && (inputTable[0] === inputTable[8])
  ||(inputTable[0] === inputTable[3]) && (inputTable[0] === inputTable[6]) 
    ||(inputTable[1] === inputTable[4]) && (inputTable[1] === inputTable[7])
    ||(inputTable[2] === inputTable[5]) && (inputTable[2] === inputTable[8])
    ||(inputTable[3] === inputTable[4]) && (inputTable[3] === inputTable[5])
    ||(inputTable[6] === inputTable[7]) && (inputTable[6] === inputTable[8])
    ||(inputTable[2] === inputTable[4]) && (inputTable[2] === inputTable[6]))
    {
        console.log('win')
    }
    else {
        console.log('it work')
    }
}

function onClick(event) {
    $(event.target).text(currentUser);
    inputTable[event.target.id] = currentUser;

    // if statment to switch from X to O  
    if(currentUser === 'X'){
        currentUser = 'O'

    }
    else {
        currentUser = 'X'
    }
    for(i = 0 ; i<= 9; i++ ){
    let cellID = $("#" + i);
    }
}

$('.cell').on('click', onClick)

 