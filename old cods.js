
    //         function insertText(elemID, text)
    //   {
    //     var elem = document.getElementById(elemID);
    //     elem.innerHTML += text;
    //   }

  //   function XorO() {
  //               $("#0").text("X");
  //           }


  // <!-- <table>
          
  //    <tr> <td> 
  //        <input type="text" id='0' value=""></td> <td>
  //        <input type="text" id='1' value=""></td> <td> 
  //        <input type="text" id='2' value=""></td> 
  //    </tr>

  //    <tr> 
  //           <td>
  //               <input type="text" id='3' value=""> </td>    <td> 
  //               <input type="text" id='4' value=""></td>  <td> 
  //               <input type="text" id='5' value=""></td> 
  //    </tr>

  //    <tr> 
  //               <td>
  //                   <input type="text" id='6' value=""> </td>    <td> 
  //                   <input type="text" id='7' value=""></td>  <td> 
  //                   <input type="text" id='8' value=""></td> 
  //    </tr>

  //   </table> -->


  //         <!-- <table id="board">
  //       <tr>
  //               <td></td>
  //               <td class="vert"></td>
  //               <td></td>
  //                       <td class="cell" id='0'></td>
  //                       <td class="cell" id='1'></td>
  //                       <td class="cell" id='2'></td>
                      
  //             </tr>
  //             <tr>
  //               <td class="hori"></td>
  //               <td class="vert hori"></td>
  //               <td class="hori"></td>
  //             </tr>
  //             <tr>
  //               <td></td>
  //               <td class="vert"></td>
  //               <td></td>
  //             </tr>
  //           </table> -->

{/* 

/* h1 {
    text-align: center;
  }
  td {
    width: 100px;
    height: 100px;
  }
  .board {
    margin: 5px auto;
  }
  .vert {
    border-left: 2px solid black;
    border-right: 2px solid black;
  }
  .hori {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  } */ 


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

if((table[0] === table[1]) && (table[0] === table[2]) ||table[0] === table[4] === table[8]||table[0] === table[3] === table[6] 
    ||table[1] === table[4] === table[7]||table[2] === table[5] === table[8]||table[3] === table[4] === table[5]
    ||table[6] === table[7] === table[8]||table[2] === table[4] === table[6])
    {
        console.log('win')
    }
    else {
        console.log('it work')
    }
}


if(currentUser === 'X' ||initialAI){
    // if(initialAI){
        // play for O
        playInitialAI();
        currentUser = 'O';
    }
//     else if 
//      {
//         currentUser = 'O'
//     }
// } 
else {
    currentUser = 'X'
}