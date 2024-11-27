var random_text_array = ["<i>yawn</i>",
    "hey how u doin'?",
    "badger badger badger badger",
    "erm... what der flip?",
    "sample text!",
    "autumn was here.",
    "<code>ParadoxicalError: Task failed successfully!</code>",
    "<a href=\"https://http.cat/\" target=\"_blank\" rel=\"noopener noreferrer\">funny cars.</a>"
]

window.addEventListener('load', getRandomTxt)

function getRandomTxt() {
    var obj = document.getElementById("random-txt");
    
    const randint = Math.floor(Math.random() * random_text_array.length);

    obj.innerHTML = random_text_array[randint];
}