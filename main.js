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
button1.addEventListener("click", function(){ 
   let a1 = Summ.value;
   let b1 = Time.value;
   let c1 = Percent.value;
   let Unit1 = a1/b1;
   let Unit2 = c1/12/100;
   let d1 =[];
   for (let i = 0; i < b1; i++) {
    if (i==0) {
      d1.push((Unit1+(a1-(Unit1*i))*c1/12).toFixed(2))
    } else {
       d1.push((Unit1+(a1-(Unit1*i))*c1/12).toFixed(2))
    }
     
   }

   console.log(d1);
})
