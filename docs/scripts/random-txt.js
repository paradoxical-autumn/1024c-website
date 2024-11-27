var random_text_array = ["yawn", "hey how u doin'?", "badger badger badger badger", "erm... what der flip?", "sample text!", "autumn was here."]

window.addEventListener('load', getRandomTxt)

function getRandomTxt() {
    var obj = document.getElementById("random-txt");
    
    const randint = Math.floor(Math.random() * random_text_array.length);

    obj.innerText = random_text_array[randint];
}