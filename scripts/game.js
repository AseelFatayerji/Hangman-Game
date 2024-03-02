function setword() {
  for (let i = 0; i < word.length; i++) {
    container.innerText += " _ ";
    ans[i] = " _ ";
  }
  return;
}

function add_letter(letter) {
  let temp = "";
  if (word.includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i).match(letter)) {
        ans[i] = letter;
      }
    }
    for (let i = 0; i < word.length; i++) {
      temp += ans[i];
    }
    container.innerText = temp;
  } else {
    errors++;
    if (errors == 1) {
      head();
    } else if (errors == 2) {
      body();
    } else if (errors == 3) {
      leftHand();
    } else if (errors == 4) {
      rightHand();
    } else if (errors == 5) {
      leftLeg();
    } else if (errors == 6) {
      rightLeg();
    } else {
      reset();
    }
  }
}
function reset() {
  let lose = document.createElement("div");
  lose.style.position = "fixed";
  lose.style.top = "150px";
  lose.style.fontFamily = "Roboto";
  lose.style.padding = "10px";
  lose.style.color = "#5d63b9";
  lose.id = "lose";
  lose.innerHTML = "<h1> YOU LOSE!!!! </h1>";
  document.body.appendChild(lose);
  console.log("lose");
  setTimeout(() => {
    location.reload()
    setword();
  }, 200000000);
}

let words = [
  "patience",
  "height",
  "explanation",
  "library",
  "all",
  "secretary",
  "music",
  "promotion",
  "supermarket",
  "insurance",
  "client",
  "enthusiasm",
  "wife",
  "location",
  "safety",
  "imagination",
  "coffee",
  "establishment",
  "economics",
  "manufacturer",
  "mood",
  "excitement",
  "movie",
  "payment",
  "birthday",
  "bedroom",
  "initiative",
  "policy",
  "month",
  "meaning",
  "candidate",
  "wealth",
  "insect",
  "county",
  "stranger",
  "bath",
  "performance",
  "assignment",
  "thing",
  "son",
  "equipment",
  "reality",
  "length",
  "region",
  "fortune",
  "audience",
  ,
  "expression",
  "protection",
  "politics",
  "engineering",
];
let errors = 0;
let random = Math.floor(Math.random() * 25);
let word = words[random].toUpperCase();
let ans = [word.length];
let container = document.getElementById("answer-section");
let letters = document.getElementsByClassName("letter");
setword();
for (let i = 0; i < 25; i++) {
  letters[i].onclick = function () {
    add_letter(this.textContent);
  };
}
document.addEventListener("keydown", function (event) {
  add_letter(event.key.toUpperCase());
});
