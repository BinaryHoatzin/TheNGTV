function MovementToTheLeft() {
    console.log("left");
    var HighlightBoxImage = document.getElementById("HighLightBoxImage");
    HighlightBoxImage.style.visibility = 'hidden';
  const Left= document.getElementsByClassName("AllItems");
    const LeftArray = Array.from(Left);
    var NumberOfTransitions = 0
    for (let i = 0; i < LeftArray.length; i++) {
        LeftArray[i].style.position = "relative";
        var CurrentPosition = parseInt(getComputedStyle(LeftArray[i]).left, 10);
        var NewPosition = CurrentPosition - 440;  /* pushes to the left */
        LeftArray[i].style.transition = 'left 2.0s ease-in-out';
        LeftArray[i].style.left = `${NewPosition}px`;
        LeftArray[i].addEventListener("transitionend", function() { 

            NumberOfTransitions++

            if (NumberOfTransitions == LeftArray.length) {

                HighlightBoxImage.style.visibility = 'visible';
            }         
        });
    }  
}



function MovementToTheRight() {
    console.log("right");
    const Left = document.getElementsByClassName("AllItems");
    const LeftArray = Array.from(Left);
    for (let i = 0; i < LeftArray.length; i++) {
        LeftArray[i].style.position = "relative";
        var CurrentPosition = parseInt(getComputedStyle(LeftArray[i]).left, 10);
        var NewPosition = CurrentPosition + 440; /* pushes to the right */
        LeftArray[i].style.transition = 'left 2.0s ease-in-out';
        LeftArray[i].style.left = `${NewPosition}px`;
    }
}


function ActivateMovement(Direction) {

    var Direction = Direction.toLowerCase();
    Direction == "left" ? MovementToTheLeft() : MovementToTheRight(); 
}

var LeftControl = document.getElementById("LeftControl");
var RightControl = document.getElementById("RightControl");
LeftControl.addEventListener("click", ActivateMovement.bind(null,"left"));
RightControl.addEventListener("click", ActivateMovement.bind(null, "right"));




/* 

function Test() {
    let movememt = document.getElementById("movement");
    movement.classList.toggle("Test");
    movement.style.backgroundColor = 'red';
    var CurrentPosition = parseInt(getComputedStyle(movement).left, 10);
    var NewPosition = CurrentPosition + 100;
    movement.style.transition = 'left 1.0s ease';
    movement.style.left = `${NewPosition}px`;
    GettingThePositionOfElement(movement);
}

*/


