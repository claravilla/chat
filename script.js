/* create function that
  read the user input
  create a new user chat div (prod a all new row)
  add the text in the div
  add the new div above the input div
  */

function chatInput() {
    let input= $("#userInput").val(); 
    let newChat = $("p");
    newChat.text(input);
    newChat.addClass("chat userChat");
    $("#chatInput").prepend(newChat);
}

  /* create a function that
  randomise a number
create a new chat div (prod a all new row)
add the text to the div based on an array of possible answer
add the div above the input chat
*/

/*create a function that generate the date and time stamp 
(see if we can use the Date object
call this function in the paragraph creation
(see if need to add a new div to populate that)
*/


