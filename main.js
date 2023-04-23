const Summ = document.getElementById('Summ');
const Time = document.getElementById('Time');
const Percent = document.getElementById('Percent');
const button = document.querySelector('.button');
const ctx = document.getElementById('myChart');
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
    new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["cd","dc"],
          datasets: [{
            label: '# of Votes',
            data: [12, 19],
            borderWidth: 5
          },
          {
            label: '# of Votes',
            data: [2, 3],
            borderWidth: 5
          }]
        },
        options: {
            plugins: {
              title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked'
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }
      });
})
