
function play() {
    // let audio = document.getElementById("audio");
    let url = document.getElementById("url").value;
    url = url.replace(/https:\/\//g, '');
    url = url.replace(/http:\/\//g, '');
    // audio.src = url;
    let new_url = window.location.origin + "/" + url;
    console.log(new_url);
    window.location.href = new_url;
}

let input = document.getElementById("url");
// Execute a function when the user releases a key on the keyboard
if (input) {
    input.addEventListener("keyup", function (event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Trigger the button element with a click
            document.getElementById("playBtn").click();
        }
    });
}
