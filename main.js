const container = document.getElementById("gameContainer");

const squareArray = [];

let nextMove = "X";

// determine if the game is over

function gameOver(message) {
    
    document.getElementById("winner").innerHTML = message;

    container.style.display = "none";

    document.getElementById("gameOver").style.display = "block";


}

// determine if the game is a draw or tie

function isDraw() {

    let shouldReturn = true;

    // forEach() is a method for array
    // forEach() will be executed for each element of the array

    squareArray.forEach(({state})=> {
        //console.log(state)
        //console.log(shouldReturn);

        if (state == "") {
            //console.log(state);
            //console.log(shouldReturn);
            shouldReturn = false;
        }

        //if (state == "") shouldReturn = false;


    });

    return shouldReturn;


}

// determine who is the winner of the game

function wonGame() {

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    //console.log(lines);


    for (let i = 0; i < lines.length; i++){

        // [a,b,c] refers to the array in the lines
        const [a,b,c,d] = lines[i];

        // so this console.log is : [0,1,2, undefined]
        //console.log([a,b,c,d]);
        
        // this console.log gives : each array in lines
        // lines is an array of arrays
        //console.log(lines[i]);

        if (
            squareArray[a].state !== ""
            &&
            squareArray[a].state === squareArray[b].state
            &&
            squareArray[a].state === squareArray[c].state
            &&
            squareArray[a].state === squareArray[d].state
        ) {
            

            return true;

        }
        
        // explanation of the squareArray[a].state

        // squareArray is an array
        // an array is an object
        // use array syntax to get data from the array
        // array[index] : to get the data from the position index of the array
        // array[index] is an object
        // an object value can be called with the object syntax to retrieve the value

        // this console.log follows the lines array order
        //console.log(squareArray[a].state);

        // this console.log returns each array in the array named lines
        // according to the order 0,3,6,0,1,2,0,2
        // the first line vertical in the array object named lines
        
        //console.log(squareArray[a]);

        // use the property state of the object array lines
        //console.log(squareArray[a].state);


        //console.log(squareArray);
        //console.log(squareArray[c]);
        // position of lines []
        //console.log(squareArray[a].position);

        // nothing inside these : the state is empty = ""
        //console.log(squareArray[b].state);
        console.log(squareArray[c].state);

    }

    return false;


}

// create a class
// learn more about class before going deeper or further

class ClassSquare {
    constructor (element, position) {
        this.element = element;
        this.position = position;
        this.state = "";
    }

    // add something
    // add a function which is a method for this class object

    clicked() {

        // Checking the position of the user
        //console.log("clicked " + this.position);

        // go to the next Move with X
        this.state = nextMove;

        // do not allowed a clicked box to be clicked again
        // do the element will be disabled by removing the class notClicked
        this.element.classList.remove("notClicked");

        // set a function to the element
        this.element.onclick = function () {
            return false;
        };

        // set the nextMove value into the p : so put the X in the box
        this.element.querySelector("p").innerHTML = this.state;

        // set the condition for winning the game

        if (wonGame() ==  true) {
            console.log(wonGame());
            // this.state = X or O
            return gameOver("Player " + this.state + " is the winner of the game !");
        }

        // only if the condition is true so if (condition) or if (condition == true)

        if (isDraw()) {
            //console.log(isDraw);
            return gameOver("Nobody is the winner of the game");
        }

        /*
        if (wonGame()) return gameOver("The winner is player " + this.state);

        // set the condition for a draw situation
        if (isDraw()) return gameOver("This is a draw !");

        */

        // set the alternative move with ternary operator ?
        nextMove == "X" ? (nextMove = "O") : (nextMove = "X");

    }
}

// create a for loop

for (let index = 0; index < 9; index++) {

    // create a div with classes
    const div = document.createElement("div");
    div.classList.add("square", "notClicked");
    //console.log(div);
    // this log results in a fact that div is a HTML tag with classes

    // create instance of the class object
    const square = new ClassSquare(div, index);
    //console.log(square);
    // this log results in a fact that square is an object

    // create a function that uses a method (method is an object function)
    div.onclick = function () {
        square.clicked();
    };

    // Create a space for user input : X or O
    div.appendChild(document.createElement("p"));

    // Stick the div to the main container
    container.appendChild(div);

    // Add the square to the squareArray
    squareArray.push(square);

}

// Checkpoint
//console.log(squareArray);