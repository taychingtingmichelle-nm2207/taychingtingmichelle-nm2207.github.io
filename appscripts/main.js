// main.js 3100

const get = document.getElementById('timeout')
setTimeout(() => {
    get.style.visibility = 'visible';
    }, 100);

    
const get2 = document.getElementById('timeout2')
setTimeout(() => {
    get2.style.visibility = 'visible';
    }, 100);

function hidelandingpage(){ // SHOW MAIN PAGE AND HIDE THE REST
  let page = document.getElementById("mainpage");
  page.style.display = 'block';
  let landp = document.getElementById("landingpage");
  landp.style.display = "none";
  alert("We'll now bring you to the main page! (ꈍᴗꈍ)");
}


function hidelandingpage2(){ //SHOW STORYBOARD BUTTON AND STORY BOARD PAGE AND HIDE THE REST 
  let page = document.getElementById("mainpage");
  page.style.display = 'none';
  let landp = document.getElementById("landingpage");
  landp.style.display = "none";
  let storyBoard = document.getElementById("storyBoard");
  storyBoard.style.display = "block";
  let storyBoardbutton = document.getElementById("timeout2")
  storyBoardbutton.style.display = "block";
  alert("We'll now bring you to the storyboard! (ꈍᴗꈍ)");
}

function hidelandingmainpage(){ // SHOW MAINPAGE AND HIDE STORY BOARD AND LANDING PAGE WHEN HOME BUTTON IS CLICKED
  let page = document.getElementById("mainpage");
  page.style.display = 'block';
  let landp = document.getElementById("landingpage");
  landp.style.display = "none";
  let storyBoard = document.getElementById("storyBoard");
  storyBoard.style.display = "none";
  alert("We'll now bring you to the main page! (ꈍᴗꈍ)");
}


//PIE CHART 1 
let xValues = ['Facebook','Instagram','Snapchat','Tiktok', "YouTube","Other"];
let yValues = [7, 25, 11, 34, 21, 3];
let barColors = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(255, 205, 86)',
  'rgb(25, 200, 94)',
  'rgb(90, 291, 32)',
  'rgb(120, 10, 43)' ]  

  window.addEventListener('load', function(){
    let myAudio = document.getElementById("myAudio");
    
    myAudio.onplaying = function() {
      isPlaying = true;
    };
    myAudio.onpause = function() {
      isPlaying = false;
    };
});

let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
}



// -----------------ALL DATA HERE --------------//

//Regional usage1 HORIZONTAL BAR CHART
const labelRegion = ["Eastern Asia", "Southern Asia", "Southeast Asia", "Northern America", "South America",  "Central & Western Europe", "Eastern Europe", "Southern Europe", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Northern Europe", "Australia & Oceania", "Central America", "Central Asia", "Caribbean", "Central Africa"];
const usersinMM= [1,194.20,847.17,506.30,434.93,306.76,261.89,183.70,183.26,163.90,154.18,88.68,65.93,45.31,29.18,27.79,27.71,26.62,24.71,21.13];

const RegionalSMstatsObj = {
  labels: labelRegion,
  datasets: [
      {
          label: "Number of Users (in Millions)",
          data: usersinMM,   
          borderWidth: 2,
          backgroundColor: "hsla(20,100%,80%,0.8)",
          borderColor: "hsla(0,100%,50%,1)"
      }
  ]
}
new Chart("regional-socialmedia-users-worldwide",
      {
          type: "horizontalBar",
          data: RegionalSMstatsObj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "bottom"   
              },
              title: {
                  display: true,
                  text: ["Number of Social Media users across specific regions (in Millions)"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 18,
                  fontColor: '#2b5797'
              },
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' Million';
                    }
                }},
          }
      });


//Regional usage2 PIE CHART 

const labelRegion2 = ["Asia Pacific", "America", "Europe", "Africa"];
const usersinMM2= [2790690000,769400000,658030000,375230000];
const barColors2 = [  "#b91d47","#00aba9","#2b5797","#e8c3b9","#1e7145"];

new Chart("regional-socialmedia-users-worldwide2", {
  type: "pie",
  data: {
    labels: labelRegion2,
    datasets: [{
      backgroundColor: barColors,
      data: usersinMM2
    }]
  },
  options: {
    title: {
      display: true,
      text: "Number of Social Media users across specific regions (in Millions)",
      fontFamily: "TrebuchetMS",
      fontSize: 18,
      fontColor: '#2b5797'
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
          },
          title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
              
          }
      }
  },
  
  }
});


//TIME SPENT VERTICAL BAR CHART

const app = ["Tiktok", "Youtube", "Instagram", "Facebook", "Snapchat"];
const minutes= [95,74,51,49,29,21];

const timespentAppsObj = {
  labels: app,
  datasets: [
      {
          label: "time spent in minutes daily",
          data: minutes,   
          borderWidth: 2,
          backgroundColor: "green",
          borderColor: "black"
      }
  ]
}
new Chart("avgTimespentdailyapps-bar-chart",
      {
          type: "bar",
          data: timespentAppsObj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "bottom"
              },
              title: {
                  display: true,
                  text: ["Average time spent using selected mobile social apps daily for users worldwide in 2nd quarter 2022"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 18,
                  fontColor: '#2b5797'
              },
          }
      });


// LINE GRAPH FOR TIKTOK INSTA FB GROWTH 2018 TO 2022 

let years = [2018, 2019, 2020, 2021, 2022];
let ttdata = [133,381,700,902,1466];
// For drawing the lines
let instadata = [1000,1210,1520,1890,2270];
let fbdata =[2230,2410,2700,2910,2933];


new Chart("instafbtiktok-growth-trend-linechart",{
    type: 'line',
    data: {
        labels: years,
        datasets: [ 
            {
            data: ttdata,
            label: "TikTok",
            borderColor: "#3e95cd",
            fill: false
            }, 
            { 
                data: instadata,
                label: "Instagram",
                borderColor: "#8e5ea2",
                fill: false
              },
              { 
                data: fbdata,
                label: "Facebook",
                borderColor: "#3cba9f",
                fill: false
              }
        ]
    },

    options: { 
      responsive: true,
      maintainAspectRatio: false,
      legend: {
          display: true,
          position: "bottom"
      },
      title: {
          display: true,
          text: ["Annual Number of Users from 2018 to 2022 (in Millions)"],
          fontFamily: "TrebuchetMS",
          fontSize: 18,
          fontColor: '#2b5797'
      },
  }
});


// BAR GRAPH FOR TIKTOK FB INSTA COMPARING AGE GROUP

const agegroup = ["13-17", "18-24", "25-34", "35-44", "45-54", "55+"];
    

   
const agegroupdataObj = {
    labels: agegroup,           
    datasets: [
        {
            label: "TikTok", 
            data: [14.4, 34.9, 28.2,12.8,6.3,3.4], 
            borderWidth: 2,
            backgroundColor: "hsl(345, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Facebook",
            data: [5.9, 23.8, 31.6, 16.9, 10.5, 11.3],
            borderWidth: 2,
            backgroundColor: "hsl(100, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Instagram", 
            data: [7.0, 30.0, 33.0, 16.0, 8.0, 6.0], 
            borderWidth: 2,
            backgroundColor: "hsl(197, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        }
        
    ],
}
new Chart("smAgegrp-bar-chart",
        {
            type: "bar",
            data: agegroupdataObj,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    position: "bottom"
                },
                title: {
                    display: true,
                    text: ['Social Media Usage Distribution by Age Group in 2022 (in %)'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',
                }
            }
        });


  // 100% STACKED BAR CHART TO COMPARE TIKTOK FACEBOOK INSTA BY GENDER 

  const stackedbarchartObj = {
  
        labels: ["TikTok", "Facebook", "Instagram"],
        datasets: [{
            label: "Male",
            backgroundColor: "rgba(50, 94, 172, 0.7)",
            data: [43.0, 56.8, 49.2],
        }, {
            label: "Female",
            backgroundColor: "rgba(200, 94, 200, 0.7)",
            data: [55.0, 43.2, 50.8],
        }, {
            label: "Other",
            backgroundColor: "rgba(50, 29, 29, 0.7)",
            data: [2.0, 0.0, 0.0]
        }]
      };

new Chart("instafbtiktok-stacked-barchart",
{
  type: 'horizontalBar',
  data: stackedbarchartObj,
  options: {
    scales: {
        xAxes: [{
            stacked: true,
            ticks: {
                min: 0,
                max: 100,
                callback: function(value){return value+ "%"}
            }
        }],
        yAxes: [{
            stacked: true
        }]
    },
    tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
            label: function(tooltipItems, data) {
                return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
            }
        }},
        title: {
          display: true,
          text: ['Social Media Usage Distributed by Gender in 2022 (in %)'],
          fontFamily: "TrebuchetMS",
          fontSize: 24,
          fontColor: 'rgb(0,120,0)',
      }}});


//reasonsfors-doughnut-chart DOUGHNUT CHART 

const usesforSM = ["Keeping in touch with friends and family", "Filling spare time", "Reading news stories", "Finding content", "Seeing what's being talked about", "Finding inspirations for things to do and buy", "Finding products to purchase", "Watching live streams", "Sharing and discussing opinions with others", "Making new contacts"];
const useforSMdata= [47.1,36.2,34.2,30.3,28.8,27.3,25.9,23.7,23.4,23.0];
const barColors3 = [  "red","blue","green","yellow","pink", "purple","grey","brown","orange","plum"];


new Chart("reasonsfors-doughnut-chart", {
  type: "doughnut",
  data: {
    labels: usesforSM,
    datasets: [{
      backgroundColor: barColors3,
      data: useforSMdata
    }]
  },
  options: {
    title: {
      display: true,
      text: "Top Uses of Social Media in 2023 (in %)",
      fontFamily: "TrebuchetMS",
      fontSize: 22,
      fontColor: '#2b5797'
    },
    legend: {
        display: true,
        position: "left"   
    }
  
  }
});


// radio button to show advantages and disadvantages

let option1 = document.getElementById("option1");
option1.addEventListener("change", function () {
    
    const smProTable = document.getElementById("sm-pros").innerHTML;
    document.getElementById("surprisetable").innerHTML = smProTable; 
    
})

let option2 = document.getElementById("option2");
option2.addEventListener("change", function(){

    const smConTable = document.getElementById("sm-cons").innerHTML;
    document.getElementById("surprisetable").innerHTML = smConTable; 
})
     