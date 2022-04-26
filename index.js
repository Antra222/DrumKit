// document.querySelector("button").addEventListener("click",handleClick);
// it finds the first buttonn in document and it adds an event
// listener to that button so that it listens for click that hapens
//  on button and when this does it runs the code inside the function
//   handleclick that should alert that it's been clicked
// i.e THE BUTTON IS LISTENING EVERY TIMES USER CLICKS ON IT AND
//  CALLING THE FUNCTION EACH TYM

// #we normally call a function with a set o parenthesis but here
//  it's different
//  #as if we put () then as soon our code will run and it will hit script
// and come to index.js and as soon as the event listener would be added to
// our button method would be called right away so the method will be called
// during adding event listener to the button instead of what we actually want
// i.e to trigger it when the click happens
// // // so we dont add ()
// So instead of calling the function we are just passing it
// That means we are waiting for click event to happen before we call
// the function


// The most common way is, instead of adding a function name here that
// calls the function later on,most people will write this code as
//  simply an anonymous function.
//  So anonymous functions look pretty much exactly the same as a
//  normal function but they're just anonymous. They don't have a name.
// So this is what it would look like.(function())
//
// And we can replace this part of the code ner("click",handleClick) with
// our anonymous function.

//DETECTING BUTTON PRESS


var numberOfDrumButtons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberOfDrumButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

//to make our entire document listen for keyPress we have to add an event listener to whole document:-
//but how do we figure out which key was pressed exactly so for that:-
//there is an opyion to passing event or e as parameter when a function is triggered
//that lets us to tap into  the event that triggered the event listener
//and that event contains a property key which tells us which keyboard key was pressed
//then we send that to funxtion makeSound which will make sound ACCORDINGLY...


//DETECTING KEYBOARD PRESS

document.addEventListener("keypress",function(event){

 makeSound(event.key);
 buttonAnimation(event.key);

});

function makeSound(key){

  switch(key){
    case "w":
     var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
    break;

    case "a":
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
    break;

    case "s":
     var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
    break;

    case "d":
     var tom4=new Audio("sounds/tom-4.mp3");
     tom4.play();
    break;

    case "j":
     var snare=new Audio("sounds/snare.mp3");
     snare.play();
    break;

    case "k":
     var crash=new Audio("sounds/crash.mp3");
     // var crash=new Audio("sounds/https___www.tones7.com_media_meooowwwwww.mp3");
     crash.play();
    break;

    case "l":
     var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
    break;

    default:
     console.log(buttonInnerHTML);
  }
}

//Adding animation to buttons

function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);//dot for specifying it's a class
  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");

  },100);

}



//adding class pressed to get shadow when clicked

//then


//after waiting 0.01 sec we removing class pressed to bring it in original form





 // alert("Key was pressed!");
//so typing any keys will give us an alert of key being pressed

 //
 // this.style.color="#F6A9A9";

 //what to do when click detected



// So now you'll see it does exactly the same thing, namely when
//  I click on the button, it goes and carries out the content of
// that anonymous function.
// And inside the parentheses of this anonymous function are all the
// instructions that you want to happen when that button detects the click.
