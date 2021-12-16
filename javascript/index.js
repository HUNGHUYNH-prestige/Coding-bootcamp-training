function main(){

    let depth = 32;
    
    let day = 0;
    let up = 7;
    let down = 2;
    let freedom = 0;

    if (depth == 0) {
        document.write("The depth is : " + depth + "<br>So the snail is free <br>");
    }

    else if (depth < 0) {
        document.write("The depth is : " + depth + "<br>Impossible situation");
    }

    else {
        document.write("The depth is : " + depth + "<br>So the snail is not free<br>");
        document.write("--- --- --- While starts here --- --- --- <br>");
        while (depth >= freedom) {
            day = day + 1;
            document.write("Day : " + day + "<br>");

            //document.write("🐱‍👤The depth is : " + depth + "<br>");
            document.write("The freedom is 🐱‍🐉: " + freedom + "<br>");
            freedom = freedom + up;
            if (freedom == depth) {
                document.write("THE SNAIL IS FREE<br>");
                break;
            }
            //document.write("⚠ Attention : slipping back ! " + down + " steps ⚠<br>");
            freedom = freedom - down;
            //document.write("The new freedom is here 😁 : " + freedom + "<br>")
        }
        document.write("Freedom is : " + freedom);
    }
}

main();


// -- -- --

// other solutions
function the_snail_in_the_well() {

    function main() {
        var depth = parseInt(readLine(), 10);
        //your code goes here
    
        var day = 0;
        var up = 7;
        var down = 2;
        
        var progression = 0;
    
        while(progression <= depth) {
    
            day = day + 1;
    
            progression = progression + up;
    
            if (progression >= depth) {
                break;
            }
    
            progression = progression - down;
    
        }
        console.log(day);
        
    }
}


function reverse_the_snail_in_the_well() {
    for (days = 0; depth > 0; days++){
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(days)
}