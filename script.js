//add event listener to send button

$(".btn").click(chatInput);

//add event listener for "enter" 

$("body").keydown(function(event){
     if(event.keyCode===13) {
       chatInput();
     }
});




//Arrays with possible replies

const genericReply = [
  "The eye of the Enemy is moving",
  "I have a bad feeling about this",
  "With a spoonful of sugar the pill goes down",
  "There's a snake in my boot",
  "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.",
  "The leaves of lothlorien do not idly fall",
  "Winter is coming"
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
];

const why = [
  "Because I say so",
  "This is the way",
  "Computer says no",
  "It's better this way"
];


const when = [
  "Never",
  "The Ides of March",
  "On your birthday",
  "On Pie day",
  "When the planets align",
  "When Hell breaks loose"
];


  // Function that randomises a number to be used to pick the reply from the array

  function randomNumber(num) {
    return Math.floor(Math.random()*num);
 }


 // Function that generates the date and time stamp


function timestamp() {
  let timestamp = new Date; 
  return timestamp.toLocaleString("en-GB");
  
  };
  

/* Function to be used when the user submit their message:
   - read the user input
   - create a new user chat div (with the full new row)
   - add the user text in the div
   - add the new div above the input div
   - add the timestamp
   - call the function to generate a reply (based on the keyword in input)
   - call the function that scroll to the bottom of the page
   
  */

function chatInput() {
    let input= $("#userInput").val(); 
    if (input==="") {
       alert("Please type a message");
    } else {         

      let newRow = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"chat userChat\"><p id=\"input\"></p></div></div>";

      $("#chatInput").before(newRow);
      $("#input").text(input);        //create the user chat bubble
      

      let newTime = "<div class=\"row\"><div class=\"placeholder\"></div><div class=\"timestamp\"><p id=\"time\"></p></div></div>";
      $("#chatInput").before(newTime);
      $("#time").text("Sent on "+timestamp());   //create timestamp
      
      $("#input").removeAttr("id");
      $("#time").removeAttr("id");
      $("#userInput").val("");  //clearing the input field

      //select which reply to send based on keyword from the input

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

      $(document).scrollTop($(document).height()); 
      
    }; 
   
};



/* Function to be called at the end of chatInput function
  
   - create a new chat div (with the full new row)
   - calls random number generator
   - add the text to the div based on an array of possible answer
   - add the div above the input chat 
   - add the timestamp
 */ 



function chatReply(reply) {
    let newRow = "<div class=\"row\"><div class=\"chat botChat\"><p id=\"input\"></p></div><div class=\"placeholder\"></div></div>"
    $("#chatInput").before(newRow);

    $("#input").text(reply[randomNumber(reply.length)]);

    let newTime = "<div class=\"row\"><div class=\"timestamp\"><p id=\"time\"></p></div><div class=\"placeholder\"></div></div>"
    $("#chatInput").before(newTime);
    $("#time").text("Sent on "+timestamp());

    $("#input").removeAttr("id");
    $("#time").removeAttr("id");


};


function scrollDown() {
  console.log("this works");
  
};

/* Notes
- Add the user message to the chat --> tutorial https://www.tutorialrepublic.com/jquery-tutorial/jquery-insert-content.php
- Help on event listerner with Enter key ---> tutorial https://api.jquery.com/keydown/
- How to scroll to the bottom of the page when the new div is added --> https://stackoverflow.com/questions/1966784/auto-scroll-to-bottom-of-page-with-jquery
*/

