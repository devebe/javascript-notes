let identity = window.prompt("Who is there?","");

if (identity === "Admin") {
    let password = window.prompt("Enter password","");

    if (password === "TheMaster") {
        alert(`Welcome ${identity}`);
    }
    else if (password === " " || password === null) {
        alert("Canceled")
    }
    else {
        alert("Your password is incorrect.")
    }
}
else if (identity === " " || identity === null) {
    alert("Canceled")
}
else {
    alert("I don't know you")
}