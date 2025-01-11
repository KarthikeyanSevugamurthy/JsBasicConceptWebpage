
function testLet() {
    let output = "";
    let genres = ["Action", "Comedy", "Drama"];

    for (let i = 0; i < genres.length; i++) {
        output += `Genre ${i + 1}: ${genres[i]}<br>`;
    }
    document.getElementById("let-output").innerHTML = output + `<strong>"let" keeps 'i' block-scoped.</strong>`;
}

function testVar() {
    var sessionActive = true;

    if (sessionActive) {
        var userName = "John Doe"; 
        document.getElementById("var-output").innerHTML = `Session Active: ${sessionActive}, User: ${userName} is still accessible here due to function scope`;
    }

    // "userName" is still accessible here due to function scope
    console.log("Outside block:", userName);
}
