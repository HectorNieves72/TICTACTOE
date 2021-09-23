// Function called whenever user tab on any box

function checkWin() {

 

    // Setting DOM to all boxes or input field
   
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
   
    b1 = document.getElementById("b1").value;
   
    b2 = document.getElementById("b2").value;
   
    b3 = document.getElementById("b3").value;
   
    b4 = document.getElementById("b4").value;
   
    b5 = document.getElementById("b5").value;
   
    b6 = document.getElementById("b6").value;
   
    b7 = document.getElementById("b7").value;
   
    b8 = document.getElementById("b8").value;
   
    b9 = document.getElementById("b9").value;
   
    
   
    }
   
    
   
   function updateTurn() {
   
    // Here, Printing Result
   
    if (flag == 1) {
   
      document.getElementById('print')
   
        .innerHTML = "Player X Turn";
   
    }
   
    else {
   
      document.getElementById('print')
   
        .innerHTML = "Player 0 Turn";
   
    }
   
   }
   
    
   
   // Function to reset game
   
   function reset() {
   
    location.reload();
   
    document.getElementById('b1').value = '';
   
    document.getElementById("b2").value = '';
   
    document.getElementById("b3").value = '';
   
    document.getElementById("b4").value = '';
   
    document.getElementById("b5").value = '';
   
    document.getElementById("b6").value = '';
   
    document.getElementById("b7").value = '';
   
    document.getElementById("b8").value = '';
   
    document.getElementById("b9").value = '';
   
    
   
   }
   
    
   
   // Here onwards, functions check turn of the player
   
   // and put accordingly value X or 0
   
   flag = 1;
   
    
   
   function updateCell(element) {
   
    if (flag == 1) {
   
      element.value = "X";
   
      flag = 0;
   
    }
   
    else {
   
      element.value = "0";
   
      flag = 1;
   
    }
   
    element.disabled = true;
   
   }