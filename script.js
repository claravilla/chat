//add event listener to send button

$(".btn").click(chatInput);

//add event listener for "enter" 

$("body").keydown(function(event){
     if(event.keyCode===13) {
       chatInput();
     }
});

//put cursor in the input field
$(".input").focus();

//Arrays with possible replies

const genericReply = [
  "A robot may not injure a human being or, through inaction, allow a human being to come to harm",
  "Happy families are all alike; every unhappy family is unhappy in its own way",
  "Just a spoonful of sugar helps the medicine go down",
  "There's a snake in my boot",
  "Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much",
  "The leaves of lothlorien do not idly fall",
  "Winter is coming",
  "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife",
  "Part of the Ship, part of the Crew",
  "Elementary, my dear Watson"
];

const who = [
  "The Witcher",
  "Sauron",
  "Professor Snape",
  "Sherlock Holmes",
  "Uncle Scrooge",
  "Hari Seldon ",
  "Mary Poppins",
  "Mr Darcy",
  "The Cheshire Cat",
  "The Wizard of Oz"
];


const where = [
  "Neverland",
  "Across the Universe",
  "In a black hole",
  "Narnia",
  "Nautilus",
  "In the study in scarlet",
  "Terminus",
  "Hogwarts",
  "The Middle Earth",
  "Les Halles de Paris"
];

const why = [
  "Because I say so",
  "This is the way",
  "It's part of the plan",
  "It's the prophecy",
  "Evolution",
  "Survival",
  "Universe expansion",
  "Magic"
];


const when = [
  "Never",
  "The Ides of March",
  "On your birthday",
  "On Pie day",
  "When the planets align",
  "When Hell breaks loose",
  "When you last expect",
  "On the next full moon",
  "At midnight",
  "At sunrise"
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
      $("#userInput").val("");  //clear the input field

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


/* Notes
- Add more element to the body in one step --> tutorial https://www.tutorialrepublic.com/jquery-tutorial/jquery-insert-content.php
- Help on event listerner with Enter key ---> tutorial https://api.jquery.com/keydown/
- How to scroll to the bottom of the page when the new div is added --> https://stackoverflow.com/questions/1966784/auto-scroll-to-bottom-of-page-with-jquery
*/

