const Summ = document.getElementById('Summ');
const Time = document.getElementById('Time');
const Percent = document.getElementById('Percent');
const button = document.querySelector('.button');
const button1 = document.querySelector('.button1')
button.addEventListener("click", function () {
  let a = Summ.value;
  let b = Time.value;
  let c = Percent.value;
  let d = 1 + 0.01 * (c / 12);
  let Perm1 = d ** b
  let Perm2 = d - 1
  let Perm3 = Perm1 * Perm2
  let Perm4 = Perm3 * a
  let Perm5 = Perm1 - 1
  let Perm6 = Perm4 / Perm5
  console.log(Perm6);
});
button1.addEventListener("click", function () {
  let a1 = Summ.value;
  let b1 = Time.value;
  let c1 = Percent.value;
  let ostatok = [];
  for (let i = 1; i <= b1; i++) {
    ostatok.push(((b1-(i-1))/b1)*a1)
  } 
  console.log(ostatok);
  let plate = [];
  for (let i = 0; i < b1; i++) {
    if (i==0) {
      plate.push(a1/b1+(c1/1200)*a1)
    } else{
      plate.push(a1/b1+c1/1200*(b1-i)/b1*a1)
    }
  }
  console.log(plate);
  let credit =[];
  for (let i = 1; i < +b1+1; i++) {
    credit.push(c1/1200*((b1-(i-1))/b1*a1))
  }
  console.log(credit);
}
)