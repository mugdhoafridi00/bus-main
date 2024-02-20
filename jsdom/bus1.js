const selectedTickets = [];

let totalSeatLeft = 8;
let bookedSeat = 0;
let totalPrice = 0;
let grandTotalPrice = 0;
document.getElementById("booked-seat").innerText = bookedSeat;
document.getElementById("total-seat").innerText = totalSeatLeft;
document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total-price").innerText = grandTotalPrice;
function handleClick(e) {
  const value = e.textContent;
  if (!selectedTickets.includes(value)) {
    if (selectedTickets.length < 4) {
      selectedTickets.push(value);
      e.classList.add("bg-green-500");
      totalSeatLeft--;
      bookedSeat++;
      totalPrice += 550;
      grandTotalPrice += 550;
      document.getElementById("booked-seat").innerText = bookedSeat;
      document.getElementById("total-seat").innerText = totalSeatLeft;
      document.getElementById("total-price").innerText = totalPrice;
      document.getElementById("grand-total-price").innerText = grandTotalPrice;

      const list = document.createElement("div");
      list.classList.add("flex", "justify-between");

      const pTag = document.createElement("p");
      const p2Tag = document.createElement("p");
      const p3Tag = document.createElement("p");

      p2Tag.textContent = "Economy";
      p3Tag.textContent = 550;
      pTag.textContent = value;

      list.appendChild(pTag);
      list.appendChild(p2Tag);
      list.appendChild(p3Tag);

      const container = document.getElementById("list");
      container.appendChild(list);
    }
  } else {
    e.classList.remove("bg-green-500");
    totalSeatLeft++;
    bookedSeat--;
    totalPrice -= 550;
    grandTotalPrice -= 550;
    document.getElementById("booked-seat").innerText = bookedSeat;
    document.getElementById("total-seat").innerText = totalSeatLeft;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total-price").innerText = grandTotalPrice;
    const container = document.getElementById("list");
    const elementsToRemove = container.querySelectorAll("div > p:first-child");
    elementsToRemove.forEach((element) => {
      if (element.textContent === value) {
        element.parentElement.remove();
        console.log("element", element);
      }
    });

    const index = selectedTickets.indexOf(value);
    if (index > -1) {
      selectedTickets.splice(index, 1);
    }

    return;
  }
}
