document.getElementById("name-button").addEventListener("click", function() {
    let inputName = document.getElementById("username").value;
    document.getElementById("name-display").innerHTML = `<h2>Go ${inputName}!</h2>`
})