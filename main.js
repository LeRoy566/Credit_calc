const table = document.querySelector('table');
const Summ = document.getElementById('Summ');
const Time = document.getElementById('Time');
const Percent = document.getElementById('Percent');
const button = document.querySelector('.button');
const button1 = document.querySelector('.button1');
const Months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

button.addEventListener("click", function () {
  let a = Summ.value;
  let b = Time.value;
  let c = Percent.value;
  let d = 1 + 0.01 * (c / 12);
  let SummPlate = (((d**b)*(d-1))*a)/((d**b)-1)
  console.log(SummPlate);
}
)
button1.addEventListener("click", function () {
  let a1 = Summ.value;
  let b1 = Time.value;
  let c1 = Percent.value;
  let ostatok = [];
  for (let i = 1; i <= b1; i++) {
    ostatok.push((((b1 - (i - 1)) / b1) * a1).toFixed(2))
  }
  console.log(ostatok);
  let plate = [];
  for (let i = 0; i < b1; i++) {
    if (i == 0) {
      plate.push((a1 / b1 + (c1 / 1200) * a1).toFixed(2))
    } else {
      plate.push((a1 / b1 + c1 / 1200 * (b1 - i) / b1 * a1).toFixed(2))
    }
  }
  console.log(plate);
  let credit = [];
  for (let i = 1; i < +b1 + 1; i++) {
    credit.push((c1 / 1200 * ((b1 - (i - 1)) / b1 * a1)).toFixed(2))
  }
  console.log(credit);

  let date = [];
  let newDate = new Date();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  for (let i = 0; i < b1; i++) {
    date.push(Months[month] + " " + year)
    month += 1
    if (month >= 12) {
      month = 0
      year += 1
    }
  }

  console.log(date);

  for (let i = 0; i < b1; i++) {
    table.style.opacity = 1
    table.insertAdjacentHTML("beforeend", `<tr></tr>`)
    const tr = document.querySelectorAll("tr");
    const currentTr = tr[tr.length - 1];

    currentTr.insertAdjacentHTML("beforeend", `<td>${i + 1}</td>`);
    currentTr.insertAdjacentHTML("beforeend", `<td>${date[i]}</td>`);
    currentTr.insertAdjacentHTML("beforeend", `<td>${plate[i]}</td>`);
    currentTr.insertAdjacentHTML("beforeend", `<td>${(a1 / b1).toFixed(2)}</td>`);
    currentTr.insertAdjacentHTML("beforeend", `<td>${credit[i]}</td>`);
    currentTr.insertAdjacentHTML("beforeend", `<td>${ostatok[i]}</td>`);

  }

}
)