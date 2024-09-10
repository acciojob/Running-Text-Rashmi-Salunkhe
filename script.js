//your JS code here. If required.
const textElement = document.getElementById('text');
const speedInput = document.getElementById('speed');
const text = "We love Programming!";
let index = 0;
let speed = 500 / speedInput.value;

function renderText() {
    textElement.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0; // Reset to loop the text
    }

    setTimeout(renderText, speed);
}

speedInput.addEventListener('input', function () {
    speed = 500 / speedInput.value; // Update speed when input changes
});

// Start rendering text
renderText();
