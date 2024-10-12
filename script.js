const formButton = document.getElementById('form-button');

let number = 0
// add functionality to the button
formButton.addEventListener('click', function(event) {
   event.preventDefault();
   console.log('button clicked');
//    adding a value to the variable
   let teamName = document.getElementById('teamName').value;
   let wins = document.getElementById('wins').value;
   let losses = document.getElementById('losses').value;
   let playersAvailable = document.getElementById('playersAvailable').value;


   console.log(teamName, wins, losses, playersAvailable);
// create a new row
   let newTableRow = document.createElement('tr')

// create a new table data
    let numberNode = document.createElement('td')
    numberNode.innerHTML = number;

    newTableRow.appendChild(numberNode);
// create the nodes to append to the row
   let teamNameNode = document.createElement('td')
   teamNameNode.innerHTML = teamName;
   newTableRow.appendChild(teamNameNode);
   let winsNode = document.createElement('td')
   winsNode.innerHTML = wins;
   newTableRow.appendChild(winsNode);
   let lossesNode = document.createElement('td')
   lossesNode.innerHTML = losses;
   newTableRow.appendChild(lossesNode);
   let playersAvailableNode = document.createElement('td')
   playersAvailableNode.innerHTML = playersAvailable;
   newTableRow.appendChild(playersAvailableNode);

   console.log(newTableRow);
// adding string so form is cleared
   document.getElementById('teamName').value = '';
   document.getElementById('wins').value = '';
   document.getElementById('losses').value = '';
   document.getElementById('playersAvailable').value = '';

// append the row to the table
   const tbody = document.getElementById('tbody');
   if (tbody) {
       tbody.appendChild(newTableRow);
   } else {
       console.error('Table body element not found');
   }
   console.log(document.getElementById('tbody'));
// incrementing the number
   number++;


});