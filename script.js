/*add event listener to send button*/

$(".btn").click(chatInput);

//add event listener for "enter" - tutorial https://api.jquery.com/keydown/

$("body").keydown(function(event){
     if(event.keyCode===13) {
       chatInput();
     }
});

//create an array with possible responses

const genericReply = [
  
  "The circumference of a circle is r*r*3.14",
  "The eye of the Enemy is moving",
  "I have a bad feeling about this",
  "With a spoonful of sugar the pill goes down",
  "There's a snake in my boot"
];

const who = [
  "The Doctor",
  "Sauron",
  "The Weasley Twins",
  "Mickey Mouse",
  "Uncle Scrooge",
  "Darth Vader",
  "Mary Poppins"
];


const where = [
  "Highway to Hell",
  "Neverland",
  "Across the Universe",
  "In a black hole",
  "Narnia",
  "In your dreams"
]

const why = [
  "Because I say so",
  "This is the way",
  "Computer says no",
  "It's better this way"
]


const when = [
  "Never",
  "The Ides of March",
  "On your birthday",
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
    } else {          //add the user message to the chat - tutorial https://www.tutorialrepublic.com/jquery-tutorial/jquery-insert-content.php

      let newRow = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"chat userChat\"><p id=\"input\"></p></div></div>";

      $("#chatInput").before(newRow);
      $("#input").text(input);
      

      let newTime = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"timestamp\"><p id=\"time\"></p></div></div>";
      $("#chatInput").before(newTime);
      $("#time").text("Sent on "+timestamp());
      
      $("#input").removeAttr("id");
      $("#time").removeAttr("id");
      $("#userInput").val("");  //clearing the input field


      //call a function to get a reply with 
      //add if statement to pass the correct constant in the call for the function

      if ((/why/i).test(input)) {
        chatReply(why);
      } else if ((/where/i).test(input)) {
        chatReply(where);
      } else if ((/when/i).test(input)) {
        chatReply(when);
      } else if ((/who/i).test(input))  {
        chatReply(who);
      } else {
        chatReply(genericReply);  
      };
   

     
    }; //end of else block;
   
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



function chatReply(reply) {
    let newRow = "<div class=\"row\"><div class=\"chat botChat\"><p id=\"input\"></p></div><div class=\"placeholder\"></div></div>"
    $("#chatInput").before(newRow);

    $("#input").text(reply[randomNumber(reply.length)]);

    let newTime = "<div class=\"row\"><div class=\"timestamp\"><p id=\"time\"></p></div><div class=\"placeholder\"></div></div>"
    $("#chatInput").before(newTime);
    $("#time").text("Sent on "+timestamp());

    $("#input").removeAttr("id");
    $("#time").removeAttr("id");
}


/*create a function that generate the date and time stamp 
(see if we can use the Date object)
call this function in the paragraph creation
(see if need to add a new div to populate that)
*/


function timestamp() {
let timestamp = new Date; 
return timestamp.toLocaleString("en-GB");

};


