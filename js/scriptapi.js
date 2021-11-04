// /* apiEndpoints links */
const apiWorld = "https://api.covid19api.com/summary";
const apiMorocco = "https://api.covid19api.com/dayone/country/morocco/status/confirmed";

/* Dom selection of the charts */
const chartDoughnut = document.querySelector("#chartWorldSummary").getContext('2d');
const chartLines = document.querySelector("#chartCountries").getContext('2d');
const chartBars = document.querySelector("#chartMorocco").getContext('2d');
const doughnutLabel = document.querySelector('.doughnutLabel');

// console.log(chartDoughnut);
// console.log(chartLines);
// console.log(chartBars);

/* get data from the api */

// with fetch
// fetch(apiWorld, {
//     method: "GET",
//     headers: {"Content-type": "application/json;charset=UTF-8"}
//     })
//     // Handle success
//     .then(dataWorld => dataWorld.json())  // convert to json
//     .then(resWolrd => console.log(resWolrd))    //print data to console
//     .catch(err => console.log('Request Failed', err)); // Catch errorsS


// with async/await
// const getDataWorld = async () => {
//     try {
//     	const responseWorld = await fetch(apiWorld)
//     	const dataWorld = await responseWorld.json()
//         console.log(dataWorld)
//     } catch (err) {
//        console.log(err)
//     }

// }
// getDataWorld()


// // with async/await: prepend the function with async
// getDataWorld()
// .then(response => {
//     const {Global} = response;
//     const {Date, NewConfirmed,NewDeaths,NewRecovered,TotalConfirmed,TotalDeaths,TotalRecovered} = Global;

//     console.log(Global);
//     console.log(Date);
//     console.log(NewConfirmed);
//     console.log(NewDeaths);
//     console.log(NewRecovered);
//     console.log(TotalConfirmed);
//     console.log(TotalDeaths);
//     console.log(TotalRecovered);

//     ShowDataWorld();

// })
// .catch(error=>console.log("erreur"));



async function getDataWorld() {
  try {
    response = await fetch(apiWorld);
    res = await response.json();
    // console.log(res);
    return res;
  }

  catch (err) {
    console.error(err.message);
  }
}

window.addEventListener("DOMContentLoaded", () => {

  ShowDataWorld();
})

async function ShowDataWorld() {
  const promiseResponse = await getDataWorld();
  // console.log(promiseResponse);
  const { Global } = promiseResponse;
  const { Date, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = Global;
  const { Countries } = promiseResponse;
  // console.log(Countries);

  let CountryByCase = Countries.map((item) => {

    return { blad: item.Country, mout: item.TotalDeaths, lescas: item.TotalConfirmed }
  })
  
// console.log(CountryByCase);
  const CountryByCase30 = CountryByCase.slice(0, 30)
  // console.log(CountryByCase30);

  const countries30 = CountryByCase30.map((item) =>{
    return item.blad;
  });

  
  const deaths = CountryByCase30.map((item) =>{
    return item.mout;
  });

  const confirmedCases = CountryByCase30.map((item) =>{
    return item.lescas;
  });
  // console.log(deaths);
  // console.log(confirmedCases);
  // console.log(countries30);


 

  doughnutLabel.textContent = `World Summary ${Date}`;
  const worldSummaryChart = new Chart(chartDoughnut, {
    type: 'doughnut',
    data: {
      labels: ["NewConfirmed", "NewDeaths", "NewRecovered", "TotalConfirmed", "TotalDeaths", "TotalRecovered"],
      datasets: [{
        label: `World Summary ${Date}`,
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

  const chartCountries = new Chart(chartLines, {
    type: 'line',
    data: {
        labels: countries30,
        datasets: [{
            label: 'Total deaths',
            data: deaths,
            backgroundColor: "transparent",
            borderColor:"blue",
            borderWidth: 4
        },
        {
          label: "Total confirmed cases",
          data: confirmedCases,
          backgroundColor: "transparent",
          borderColor:"orange",
          borderWidth: 4
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
                beginAtZero: true
            }
        }
    }
});
}


async function getDataMorocco() {
  try {
    response = await fetch(apiMorocco);
    res = await response.json();
    // console.log(res);
    return res;
  }

  catch (err) {
    console.error(err.message);
  }
}

window.addEventListener("DOMContentLoaded", () => {

  ShowDataMorocco();
})

async function ShowDataWorld() {

  let Lemaroc = Countries.filter(leblad => leblad.Country === "Morocco");
  // console.log(Lemaroc)
  
  let LemarocDestruct = Lemaroc.map((item) => {
  
    return { NCMA: item.NewConfirmed, NDMA: item.NewDeaths, NRMA: item.NewRecovered }
  })
  
  let NCMA = LemarocDestruct[0].NCMA;
  
  // const NewConfirmedMA = LemarocDestruct.map((item) =>{
  //   return item.NCMA;
  // });
  
  // const NewDeathsMA = LemarocDestruct.map((item) =>{
  //   return item.NDMA;
  // });
  
  // const NewRecoveredMa = LemarocDestruct.map((item) =>{
  //   return item.NCMA;
  // });

const chartMorocco = new Chart(chartBars, {
  type: 'bar',
  data: {
      labels: [20,24,25,26],
      datasets: [{
          label: '# of Votes',
          data: [NCMA,NewDeathsMA,NewRecoveredMa],
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
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
}
