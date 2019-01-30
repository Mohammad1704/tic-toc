

var table = ['','','',
             '','','',
             '','','',]
var currentUser = 'X'
var turnCount = 0;

// Start with a computer flag
// When the user plays their turn, check if the computer flag is true
// If true; play the O move
// If false; do nothing
var initialAI = true;


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
        $('#message').text('🎉🎊🎉🎊🎉player ' + currentUser + ' win!! 🎉🎊🎉🎊🎉');
        $(event.target).off("click");
        $('.cell').off("click");
        $(event.target).off("onClick");
        $('.cell').off("onClick");
        $(event.target).off("checkResult");


    } else if (turnCount === 9) {
        $('#message').text('Tie🛑');
    }else {
        $('#message').text('Next Turn');

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
        //////////////////////////////
        if(currentUser === 'X'){
            currentUser = 'O'
            initialAI();
            currentUser = 'X'

        } else {
            currentUser = 'X'
        }
        /////////////////////////////////
        // else space is not open so do not play 
        // Check if computer is playing AI

function initialAI(){


        for ( var i=0 ; i < table.length ; i++){
            if (table[i] === ''){
                console.log('hi')
                turnCount++
                // add user to space in html

            
                $('#'+i).text('O');
                // add user to javascript array
                table[i] = 'O';
                // check for winner
                checkResult();
                // end loop because we found the match
                break;
            }
  
        }
    }

    
    } else {
        $('#message').text('Not honorable player');
    }
}

$('.cell').on('click', onClick)

 