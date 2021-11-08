// /* apiEndpoints links */
const apiWorld = "https://api.covid19api.com/summary";
const apiMorocco = "https://api.covid19api.com/dayone/country/morocco/status/confirmed";

/* Dom selection of the charts */
const chartDoughnut = document.querySelector("#chartWorldSummary").getContext('2d');
const chartLines = document.querySelector("#chartCountries").getContext('2d');
const chartBars = document.querySelector("#chartMorocco").getContext('2d');
const doughnutLabel = document.querySelector('.doughnutLabel');
const barLabel = document.querySelector(".barLabel");
const barLines = document.querySelector(".barLines");
const todayis = document.querySelector(".today")
console.log (todayis);

async function getDataWorld() {
  try {
    response = await fetch(apiWorld);
    res = await response.json();
    return res;
  }

  catch (err) {
    console.error(err.message);
  }
}

window.addEventListener("DOMContentLoaded", async () => {

  ShowDataWorld();
})

async function ShowDataWorld() {
  const promiseResponse = await getDataWorld();
  const { Global,} = promiseResponse;
  const {Date:today,NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = Global;
  const { Countries } = promiseResponse;

  let CountryByCase = Countries.map((item) => {

    return { blad: item.Country, mout: item.TotalDeaths, lescas: item.TotalConfirmed }
  });
  
  
  const CountryByCase30 = CountryByCase.slice(0, 30)

  const countries30 = CountryByCase30.map((item) =>{
    return item.blad;
  });

  
  const deaths = CountryByCase30.map((item) =>{
    return item.mout;
  });

  const confirmedCases = CountryByCase30.map((item) =>{
    return item.lescas;
  });

  const Today = Date.parse(today);
  const parsedDate = new Date(Today);
  console.log(parsedDate)
  const day = parsedDate.toLocaleString('en-US', {day:'numeric'});
  const month = parsedDate.toLocaleString('en-US', {month:'long'});
  const year = parsedDate.toLocaleString('en-US', {year:"numeric"});
  console.log(day,month,year)

 

  doughnutLabel.textContent = `World Summary  ${month + " " +  day + "," + " " + year}`;
  const worldSummaryChart = new Chart(chartDoughnut, {
    type: 'doughnut',
    data: {
      labels: ["NewConfirmed", "NewDeaths", "NewRecovered", "TotalConfirmed", "TotalDeaths", "TotalRecovered"],
      datasets: [{
        label: `World Summary ${today}`,
        data: [NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        hoverOffset: 4
      }]
    },
  });
  todayis.textContent = month + " " +  day + "," + " " + year
  barLines.textContent = `Countries  ${month + " " +  day + "," + " " + year}`;
  const chartCountries = new Chart(chartLines, {
    type: 'line',
    data: {
        labels: countries30,
        datasets: [{
            label: 'Total deaths',
            data: deaths,
            backgroundColor: "transparent",
            borderColor:"blue",
            borderWidth: 4,
            yAxisID: 'y',
        },
        {
          label: "Total confirmed cases",
          data: confirmedCases,
          backgroundColor: "transparent",
          borderColor:"orange",
          borderWidth: 4,
          yAxisID: 'y1',
      }]
    },
    options: {
        elements:{
          line:{
            tension:0
          }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                grid: {
                  color: 'rgba(0,255,0,0.1)',
                  borderColor: 'blue'
                },
                ticks: {
                  beginAtZero: true,
                  stepStepSize: 1000,
                  }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                color: 'rgba(0,255,0,0.1)',
                borderColor: 'orange'
              },
              ticks: {
                beginAtZero: true,
                stepSize: 100000,
               }
          }
            
        }
    }
});
}


async function getDataMorocco() {
  try {
    response = await fetch(apiMorocco);
    res = await response.json();
    return res;
  }

  catch (err) {
    console.error(err.message);
  }
}

window.addEventListener("DOMContentLoaded", () => {

  ShowDataMorocco();
})

async function ShowDataMorocco() {
  const promiseForApiMorocco = await getDataMorocco();

  
let ArrayMorocco = promiseForApiMorocco.map((item) => {
  
    return { cases: item.Cases, day: item.Date}
  })


  const lastFivedays = ArrayMorocco.slice(ArrayMorocco.length - 5, ArrayMorocco.length);

 

  let options = { year: 'numeric', month: 'long', day: 'numeric' }
   
  let dateP0= new Date((lastFivedays[0].day));
  let day0 =dateP0.toLocaleString('en-US', options);
  
  let dateP1= new Date((lastFivedays[1].day));
  let day1= dateP1.toLocaleString('en-US', options);

  let dateP2= new Date((lastFivedays[2].day));
  let day2 = dateP2.toLocaleString('en-US', options);

  let dateP3= new Date((lastFivedays[3].day));
  day3=dateP3.toLocaleString('en-US', options)

  let dateP4= new Date((lastFivedays[4].day));
  day4=dateP4.toLocaleString('en-US', options);

  
  barLabel.textContent = `Morocco cases ${day4}`;
  const chartMorocco = new Chart(chartBars, {
  type: 'bar',
  data: {
      labels: [day0,day1,day2,day3,day4],
      datasets: [{
          label: 'cases numbers',
          data: [lastFivedays[0].cases,lastFivedays[1].cases,lastFivedays[2].cases,lastFivedays[3].cases,lastFivedays[4].cases],
          backgroundColor: [
              'rgba(0, 9, 255, 0.8)',
            
          ],
          borderColor: [
              'rgba(0, 9, 255, 1)',
              
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
            ticks: {
              beginAtZero: true,
              stepStepSize: 5000,
              }
          }
      }
  }
});
}


