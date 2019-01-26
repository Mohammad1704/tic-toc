
var table = ['x','x','x',
             'x','x','x',
             'x','x','x',]

             if(table[0] === table[1] === table[3] ||table[0] === table[4] === table[8]||table[0] === table[3] === table[6] 
                ||table[1] === table[4] === table[7]||table[2] === table[5] === table[8]||table[3] === table[4] === table[5]
                ||table[6] === table[7] === table[8]||table[2] === table[4] === table[6])
                {
                    console.log('win')
                }
                else {
                    console.log('it work')
                }