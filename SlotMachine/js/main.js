
const render = () => {
  let aSlot = Math.floor(Math.random() * 3);
  let bSlot = Math.floor(Math.random() * 3);
  let cSlot = Math.floor(Math.random() * 3);

  let slots = [
    "https://placekitten.com/225/225",
    "https://placekitten.com/250/250",
    "https://placekitten.com/275/275"
  ];

  document.getElementById("slot1").setAttribute("src", slots[aSlot]);
  document.getElementById("slot2").setAttribute("src", slots[bSlot]);
  document.getElementById("slot3").setAttribute("src", slots[cSlot]);
};

let play = () => {};
