/*add event listener to send button*/

$(".btn").click(chatInput);

//add event listener for "enter"

$("body").keydown(function(event){
     if(event.keyCode===13) {
       chatInput();
     }
});

//create an array with possible responses

const reply = [
  "Computer says no",
  "The circumference of a circle is r*r*3.14",
  "The eye of the Enemy is moving",
  "I have a bad feeling about this",
  "With a spoonful of sugar the pill goes down"
];

/* create function that
   - read the user input
   - create a new user chat div (with the full new row)
   - add the text in the div
   - add the new div above the input div
  */

function chatInput() {
    let input= $("#userInput").val(); 
    if (input==="") {
       alert("Please type a message");
    } else {          //add the user message to the chat

      let newRow = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"chat userChat\"><p id=\"input\"></p></div></div>";

      $("#chatInput").before(newRow);
      $("#input").text(input);
      $("#input").removeAttr("id");


      $("#userInput").val("");  //clearing the input field
      chatReply();  //call a function to get a reply


    } //end of else block;
   
};

  // create a function that randomise a number

  function randomNumber(num) {
     return Math.floor(Math.random()*num);
  }


/* create a function that
   - calls random number
   - create a new chat div (with the full new row)
   - add the text to the div based on an array of possible answer
   - add the div above the input chat  */



function chatReply() {
    let newRow = "<div class=\"row\"><div class=\"chat botChat\"><p id=\"input\"></p></div><div class=\"placeholder\"></div></div>"
    $("#chatInput").before(newRow);
    $("#input").text(reply[randomNumber(reply.length)]);
    $("#input").removeAttr("id");
}


/*create a function that generate the date and time stamp 
(see if we can use the Date object
call this function in the paragraph creation
(see if need to add a new div to populate that)
*/


