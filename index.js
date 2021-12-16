console.log("start");


// resolve the problem find the largest number in an array
function findLargest(numbers){


    if (numbers.length > 0){
        console.log(Math.max(...numbers));
        // either console.log or return or both
        return Math.max(...numbers);
    }
    else {
        console.log("error");
        // either console.log or return or both
        return "error";
    }
   
}

let array = [12, 21, 0,-99 ,-100, 999999];
findLargest(array);

// this is cool

