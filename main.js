
// var table = ['','','',
//              '','','',
//              '','','',]

// create an object
// that has the cell id as the key
// and the value for the key as the value in the cell on the screen

var table = ['','','',
             '','','',
             '','','',]
var currentUser = 'X'
var turnCount = 0
// FIND WINNER OF GAME
var checkResult = function(){
    
    
  if((table[0] === table[1]) && (table[0] === table[2] && table[0] !== '') 
  ||(table[0] === table[4]) && (table[0] === table[8] && table[0] !== '')
  ||(table[0] === table[3]) && (table[0] === table[6] && table[0] !== '') 
    ||(table[1] === table[4]) && (table[1] === table[7] && table[1] !== '')
    ||(table[2] === table[5]) && (table[2] === table[8] && table[2] !== '')
    ||(table[3] === table[4]) && (table[3] === table[5] && table[3] !== '')
    ||(table[6] === table[7]) && (table[6] === table[8] && table[6] !== '')
    ||(table[2] === table[4]) && (table[2] === table[6]) && table[2] !== '')
    {
        console.log('win');
        $('#message').text('you win , good for you :)');
        
    } else if (turnCount === 9) {
        $('#message').text('Tie');
    }else {
        console.log('u loos');
        $('#message').text('NExt Turn');

    }
}

function onClick(event) {
    // if the space is open
    if (table[event.target.id] === ''){ 
        turnCount++
        // add user to space in html
        $(event.target).text(currentUser);
        // add user to javascript array
        table[event.target.id] = currentUser;
        // check for winner
        checkResult();
        // if statment to switch from X to O  
        if(currentUser === 'X'){
            currentUser = 'O'

        } else {
            currentUser = 'X'
        }
    // else space is not open so do not play
    } else {
        $('#message').text('Not honorable player');
    }
}

$('.cell').on('click', onClick)

 