// ### Question 3:

// Convert the below API call to use a try-catch-finally statement.


async function getFact() {

    try {

        const response = await fetch("https://cat-fact.herokuapp.com/facts");
        const results = await response.json();
        console.log(results[8].text);
        
    } catch(error) {
        console.log("an error occoured")

    } finally {
        console.log("This will run whether there is an error not");
    }
    
}

getFact();