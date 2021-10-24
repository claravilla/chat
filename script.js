/*add event listener to send button*/

$(".btn").click(chatInput);

//add event listener for "enter"

$("body").keydown(function(event){
     if(event.keyCode===13) {
       chatInput();
     }
});


/* create function that
  read the user input
  create a new user chat div (prob a all new row)
  add the text in the div
  add the new div above the input div
  */

function chatInput() {
    let input= $("#userInput").val(); 
    if (input==="") {
       alert("Please type a message");
    } else {

      let newRow = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"chat userChat\"><p id=\"input\"></p></div></div>";

      $("#chatInput").before(newRow);
      $("#input").text(input);
      $("#input").removeAttr("id");


      $("#userInput").val("");


    } //end of else block;
   
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


