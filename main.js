const Summ = document.getElementById('Summ');
const Time = document.getElementById('Time');
const Percent = document.getElementById('Percent');
const button = document.querySelector('.button');
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
})