

let readline = prompt("Enter a word")

words = []

console.log("Enter words one by one, when you want to stop enter stop to exit")

word = readline.question("")

while(word.toLowerCase() != "stop") {
    words.push(word);
    word = readline.question("");
}

if(words.length > 0) {
    console.log("You entered the following words: "+words.join(" "));
    console.log("No words to display, stop was the first word entered.");
}
