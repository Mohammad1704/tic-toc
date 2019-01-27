
var table = ['','','',
             '','','',
             '','','',]

             // create an object
             // that has the cell id as the key
             // and the value for the key as the value in the cell on the screen

var currentUser = 'X'
// FIND WINNER OF GAME
var checkResult = function(){
    
    
  if((table[0] === table[1]) && (table[0] === table[2]) 
  ||(table[0] === table[4]) && (table[0] === table[8])
  ||(table[0] === table[3]) && (table[0] === table[6]) 
    ||(table[1] === table[4]) && (table[1] === table[7])
    ||(table[2] === table[5]) && (table[2] === table[8])
    ||(table[3] === table[4]) && (table[3] === table[5])
    ||(table[6] === table[7]) && (table[6] === table[8])
    ||(table[2] === table[4]) && (table[2] === table[6]))
    {
        console.log('win')
    }
    else {
        console.log('it work')
    }
}

function onClick(event) {
    $(event.target).text(currentUser);

    // if statment to switch from X to O  
    if(currentUser === 'X'){
        currentUser = 'O'

    }
    else {
        currentUser = 'X'
    }
}

$('.cell').on('click', onClick)

 