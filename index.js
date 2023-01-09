// Mouse Click will start here
for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function handleClick() {

        var buttonHtml = this.innerHTML;
        makeSound(buttonHtml);
        AnimationButton(buttonHtml);
    });
}
// The mouse click features will end here.


// The keyboard click starts here.
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    AnimationButton(event.key);
});
// The keyborad click portion ends here.


function makeSound(key){
    switch (key) {
        case "w":
            var a1 = new Audio("sounds/tom-1.mp3");
            a1.play();
            break;

        case "a":
            var a2 = new Audio("sounds/tom-2.mp3");
            a2.play();
            break;

        case "s":
            var a3 = new Audio("sounds/tom-3.mp3");
            a3.play();
            break;

        case "d":
            var a4 = new Audio("sounds/tom-4.mp3");
            a4.play();
            break;

        case "j":
            var a5 = new Audio("sounds/snare.mp3");
            a5.play();
            break;
    
        case "k":
            var a6 = new Audio("sounds/kick-bass.mp3"); 
            a6.play();
            break;
        
        case "l":
            var a7 = new Audio("sounds/crash.mp3"); 
            a7.play();
            break;
    
        default:
            console.log(buttonHtml  )
            break;
    }
}

function AnimationButton(currKey){
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}