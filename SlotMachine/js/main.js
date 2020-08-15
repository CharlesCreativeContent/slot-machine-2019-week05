let bet = 5;
let money = 1000;
let pocket = document.getElementById("money");
let currentBet = document.getElementById("current");
let firstSlot = document.getElementById("slot1");
let secondSlot = document.getElementById("slot2");
let thirdSlot = document.getElementById("slot3");
let playButton = document.getElementById("play");

let max = () => {
  bet = 50;
  current.innerHTML = `Current Bet: $${bet}`;
};

let bet5 = () => {
  if (bet <= 45) {
    bet += 5;
    currentBet.innerHTML = `Current Bet: $${bet}`;
  }
};

let betMinus5 = () => {
  if (bet >= 10) {
    bet -= 5;
    currentBet.innerHTML = `Current Bet: $${bet}`;
  }
};

let min = () => {
  bet = 5;
  currentBet.innerHTML = `Current Bet: $${bet}`;
};

let lose = () => {
  playButton.removeAttribute("onclick");
  alert("You Lose. Come Back With More Money!");
};

const render = () => {
  let aSlot = Math.floor(Math.random() * 5);
  let bSlot = Math.floor(Math.random() * 5);
  let cSlot = Math.floor(Math.random() * 5);

  let slots = [
    "https://placekitten.com/201/200",
    "https://placekitten.com/200/200",
    "https://placekitten.com/203/200",
    "https://placekitten.com/204/200",
    "https://placekitten.com/202/200"
  ];

  firstSlot.setAttribute("src", slots[aSlot]);
  secondSlot.setAttribute("src", slots[bSlot]);
  thirdSlot.setAttribute("src", slots[cSlot]);

  if (aSlot === bSlot && bSlot === cSlot) {
    money += bet * 10;
    pocket.innerHTML = `Money: $${money}`;
  } else {
    money -= bet;
    pocket.innerHTML = `Money: $${money}`;
    if (money <= 0) {
      lose();
    }
  }
};
