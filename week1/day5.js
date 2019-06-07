for (var x=0; x<=100; x++) {
        if (x %3===0) {
                console.log(x +  " is fizz");
        }
        else if (x % 5 === 0) {
                console.log(x + " is buzz");   
        }
        else if (x % 5 === 0 && x %3===0) {
                console.log(x + " fizz buzz");
        }
}