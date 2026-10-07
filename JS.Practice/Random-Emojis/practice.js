let btn = document.querySelector(".generate");
let emojiEl = document.querySelector("#emoji");
let emoji = ["🙂", "😅", "🥳", "😭", "🥲", "🥺", "⭐", "🥹", "👊", "🖐️", "🫡"];

// function randomEmojis(start, end) {
//     const rangeStart = parseInt(start, 16);
//     const rangeEnd = parseInt(end, 16);
//     const RandomCodePoint = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
//     return String.fromCodePoint(RandomCodePoint);
// }

// btn.addEventListener("click", () => {
//     const emoji = randomEmojis("1F600", "1F64F");
//     emojiEl.textContent = emoji;
// });

function randomEmo() {
    const random = Math.floor(Math.random() * (emoji.length));
    return emoji[random];
}

btn.addEventListener("click", () => {
    const emo = randomEmo();
    emojiEl.textContent = emo;
})