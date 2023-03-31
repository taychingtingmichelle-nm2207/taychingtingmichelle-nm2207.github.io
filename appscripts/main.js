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
          backgroundColor: ["hsla(20,100%,80%,0.8)","hsl(358, 97%, 34%)","hsl(358, 97%, 20%)", "hsl(358, 97%, 29%)","hsl(358, 97%, 33%)", "hsl(358, 97%, 37%)" ,"hsl(358, 97%, 40%)", "hsl(358, 97%, 39%)", "hsl(358, 97%, 42%)", "hsl(358, 97%, 44%)", "hsl(358, 97%, 55%)", "hsl(358, 97%, 63%)","hsl(358, 97%, 69%)", "hsl(358, 97%, 76%)", "hsl(358, 97%, 83%)" , "hsl(358, 97%, 83%)", "hsl(358, 97%, 83%)", "hsl(358, 97%, 83%)", "hsl(358, 97%, 83%)"],
          borderColor: "black"
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
const minutes= [95,74,51,49,21];

const timespentAppsObj = {
  labels: app,
  datasets: [
      {
          label: "time spent in minutes daily",
          data: minutes,   
          borderWidth: 2,
          backgroundColor: ["hsl(121, 40%, 27%)", "hsl(121, 40%, 39%)", "hsl(121, 66%, 45%)", "hsl(121, 81%, 57%)", "hsl(121, 99%, 83%)"],
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
              scales: {
                xAxes: [{
                    stacked: true,
                    ticks: {
                        min: 10,
                        max: 100,
                    }
                }],
                yAxes: [{
                    stacked: true
                }]}}
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
    
  // BAR CHART FOR PARENTS AWARENESS ON CYBERBULLYING 

  const regions_cyberbullying = ["APAC", "Europe", "LATAM", "Middle East/Africa", "North America"];
    

   
const regionalcb_dataobj = {
    labels: regions_cyberbullying,           
    datasets: [
        {
            label: "Other forms of technology", 
            data: [3,4,11,6,3], 
            borderWidth: 2,
            backgroundColor: "hsl(345, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Other websites",
            data: [10,9,23,13,8],
            borderWidth: 2,
            backgroundColor: "hsl(100, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "E-mail", 
            data: [29,13,17,18,23], 
            borderWidth: 2,
            backgroundColor: "hsl(197, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Online chat room",
            data: [45,29,35,33,29],
            borderWidth: 2,
            backgroundColor: "hsl(284, 97%, 40%)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Online messaging", 
            data: [48,33,37,36,41], 
            borderWidth: 2,
            backgroundColor: "hsl(197, 73%, 50%, 0.5)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Mobile",
            data: [46,40,50,42,41],
            borderWidth: 2,
            backgroundColor: "hsl(171, 97%, 40%)",
            borderColor: "rgb(0,0,0)"
        },
        {
            label: "Social networks", 
            data: [53,65,76,61,67], 
            borderWidth: 2,
            backgroundColor: "hsl(62, 97%, 59%)",
            borderColor: "rgb(0,0,0)"
        }
        
    ],
}
new Chart("cyberbullyingaccordingtoparentsbyregion-bar-chart",
        {
            type: "bar",
            data: regionalcb_dataobj,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    position: "bottom"
                },
                title: {
                    display: true,
                    text: ['Parental Awareness of Digital Platforms used for Cyber Bullying, by Region (April 2018)'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',
                },
                
            }
        });


//RADAR CHART, TYPE OF ONLINE MEDIUM

const medium = ["Social networks", "Mobile", "Online Messaging", "Online chat room", "E-mail", "Other Websites", "Other technology"];
const medium_dataset = [[23,58,57,53,25,8,1],[66,44,47,50,44,16,5],[71,57,33,31,23,19,9]];
const countrychildren = ["China", "India", "Malaysia"];

new Chart("typeofonlinemedium-chart", {
    type: "radar",
    data: {
        labels: medium,
        datasets: [{
            label: 'Children in China',
            data: medium_dataset[0],
            fill: true,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Children in India',
            data: medium_dataset[1],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label:'Children in Malaysia',
            data: medium_dataset[2],
            fill: true,
            backgroundColor: 'rgba(140, 162, 235, 0.2)',
            borderColor: 'rgb(140, 162, 235)',
            pointBackgroundColor: 'rgb(140, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(140, 162, 235)'
        }]
    },
    options: {
      title: {
        display: true,
        text: "Cyber bullying among children in CN,IN,MY as of April 2018, by type of online medium (in %)",
        fontFamily: "TrebuchetMS",
        fontSize: 22,
        fontColor: '#2b5797'
      },
      legend: {
          display: true,
          position: "top"   
      }
    }
  });


  //POLAR CHART - cb victims by gender
  const gender_dataset = [21.9, 23.7, 35.4];
  
  new Chart("cbvictimsbyGender-polarchart", {
      type: "polarArea",
      data: {
          labels: ['Male','Female','Transgender'] ,
          datasets: [{
              label: "Genders",
              data: gender_dataset,
              fill: true,
              backgroundColor:['rgba(10, 99, 132, 0.2)','rgba(66, 162, 235, 0.2)','rgba(240, 162, 235, 0.2)'],
              borderColor: ['rgba(10, 99, 132, 0.9)','rgba(66, 162, 235, 0.9)','rgba(240, 162, 235, 0.9)']
              
              
      }]},
      options: {
        title: {
          display: true,
          text: "Cyber bullying victims by gender in the U.S as of June 2021 (in %) ",
          fontFamily: "TrebuchetMS",
          fontSize: 20,
          fontColor: '#2b5797'
        },
        legend: {
            display: true,
            position: "top"   
        }
      }
    });


''

//Horizontal Bar Chart - types of cb in US
const typesofCb = ["I have been cyberbullied", "Mean or hurtful comments online", "Rumors online", "Threatened to hurt me through a cell phone text", "Posted mean remarks with implied sexual meaning", "Threatened to hurt me online", "Posted a mean or hurtful picture online of me","Pretended to be me online", "Posted mean remarks about my race or color", "Posted a mean or hurtful video online of me", "Posted mean names or comments online about my religion", "Created a mean or hurtful web page about me", "One or more of above, two or more times"];
const typesofCbdata = [17.4, 24.9, 22.2, 12.2, 12, 11.7, 10.8, 10.1, 9.5, 7.1, 6.7, 6.4, 30.1]

const typesofCbinUS_dataobj = {
  labels: typesofCb,
  datasets: [
      {
          label: "Percentage of the types of ways students got cyberbullied",
          data: typesofCbdata,   
          borderWidth: 2,
          backgroundColor: ["hsl(271, 100%, 46%)", "hsl(271, 100%, 35%)", "hsl(271, 100%, 41%)", "hsl(271, 100%, 58%)", "hsl(271, 100%, 58%)", "hsl(271, 100%, 58%)", "hsl(271, 100%, 62%)", "hsl(271, 100%, 65%)", "hsl(271, 100%, 68%)", "hsl(271, 100%, 74%)", "hsl(271, 100%, 79%)", "hsl(271, 100%, 83%)", "hsl(271, 100%, 27%)"],
          borderColor: "black"
      }
  ]
}
new Chart("typeofcbinUS-hbarchart",
      {
          type: "horizontalBar",
          data: typesofCbinUS_dataobj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "bottom"   
              },
              title: {
                  display: true,
                  text: ["Percentage of U.S. Middle and High School students who were cyber bullied (as of Apr 2019)"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 18,
                  fontColor: '#2b5797'
              },
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + '%';
                    }
                }},
          }
      });



//STACKED BAR CHART VERTICAL for US cyberbullying victims
const usAgegroup = ["18-29", "30-49", "50-64", "65+"];
const usAgegroupdatasevere = [48, 32, 16, 7, 25];
const usAgegroupdataNotsevere = [16,17, 14,14,16];

const usAgegroup_dataObj = {
  labels: usAgegroup,
  datasets: [
      {
          label: "Experienced Severe online harrassment",
          data: usAgegroupdatasevere,   
          borderWidth: 2,
          backgroundColor: "rgb(255, 0, 0, 0.4)",
          borderColor: "black"
      },{

        label: "Experienced Less severe online harrassment",
        data: usAgegroupdataNotsevere,   
        borderWidth: 2,
        backgroundColor: "rgb(255, 255, 26, 0.4)",
        borderColor: "black"
    }
  ]
}
new Chart("usAdultscb-stacked-bar-chart",
      {
          type: "bar",
          data: usAgegroup_dataObj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "bottom"
              },
              title: {
                  display: true,
                  text: ["Adults in the United States who have personally experienced", "online harassment as of September 2020, by age group (in %)"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 18,
                  fontColor: '#2b5797'
              },
              scales: {
                xAxes: [{
                    stacked: true,
                    
                }],
                yAxes: [{
                    stacked: true,
                    ticks: {
                        min: 0,
                        max: 80,
                        callback: function(value){return value+ "%"}
                    }
                
                }]},
                }
      });

//RADAR CHART, wellbeing

const perception = ["Sometimes I feel excluded online", "Have deleted posts that didn't get enough likes", "feels bad about not getting any comments on post", "Never been cyber bullied"];
const perception_dataset = [[70,43,43,35],[29,13,11,5]];

new Chart("mentalhealthandemoinfluences-radar-chart", {
    type: "radar",
    data: {
        labels: perception,
        datasets: [{
            label: 'Low Social-Emotional well being',
            data: perception_dataset[0],
            fill: true,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'High Social-Emotional well being',
            data: perception_dataset[1],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    },
    options: {
      title: {
        display: true,
        text: ["Negative social media effects according to teenagers", "in the United States as of April 2018, by emotional well-being (in %)"],
        fontFamily: "TrebuchetMS",
        fontSize: 26,
        fontColor: '#2b5797'
      },
      legend: {
          display: true,
          position: "top"   
      }
    }
  });

// BAR CHART BASED ON GENERATIONS
  const generations = ["Gen Z", "Millennials", "Gen X", "Boomers"];
const generationsdata= [36,30,21,12,7];

const generationperception_dataObj = {
  labels: generations,
  datasets: [
      {
          label: "Percentage of people who feel that social media has a negative impact on wellbeing",
          data: generationsdata,   
          borderWidth: 2,
          backgroundColor: ["hsl(183, 100%, 39%)", "hsl(183, 100%, 46%)","hsl(183, 100%, 62%)","hsl(183, 100%, 83%)"],
          borderColor: "black"
      }
  ]
}
new Chart("negativeimpactonsmbygenerations-bar-chart",
      {
          type: "horizontalBar",
          data: generationperception_dataObj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "bottom"   
              },
              title: {
                  display: true,
                  text: ["Adults worldwide who feel that social media has a", "negative impact on social wellbeing as of November 2021, by generation"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 22,
                  fontColor: '#2b5797'
              },
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
                    }
                }},
          }
      });


//RADAR CHART, how many people lost sleep 

const scale = ["Rarely", "Always", "Frequently", "Occasionally", "Often"];
const scale_dataset = [32.4,14.7,20.6,13.2,19.1];

new Chart("adultslosingsleep-radar-chart", {
    type: "radar",
    data: {
        labels: scale,
        datasets: [{
            label: 'People who felt that social media was the cause they lost sleep',
            data: scale_dataset,
            fill: true,
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff'
        }]
    },
    options: {
      title: {
        display: true,
        text: "Aged 18-25 activer social media users who felt that social made them lose sleep (2018)",
        fontFamily: "TrebuchetMS",
        fontSize: 22,
        fontColor: '#2b5797'
      },
      legend: {
          display: true,
          position: "top"   
      }
    }
  });


  //POLAR CHART - cb victims by gender
  const reasonsforNegImpacts = ["Bullying/Rumour Spreading", "Harms relationships/lack of physical interactions", "Unrealistic view of others' lives", "Causes distractions/Addiction", "Peer Pressure", "Causes Mental Health Issues", "Drama"];
  const reasonsforNegImpacts_data = [27,17,15,14,12,4,3];

  new Chart("whysmhasmostlynegativeffects-polar-chart", {
      type: "polarArea",
      data: {
          labels:  reasonsforNegImpacts,
          datasets: [{
              label: "Leading Reasons for Negative Impact of Social Media",
              data: reasonsforNegImpacts_data,
              fill: true,
              backgroundColor:['rgba(10, 99, 132, 0.2)','rgba(66, 162, 235, 0.2)','rgba(200, 162, 235, 0.2)','rgba(120, 162, 235, 0.2)', 'rgb(0, 204, 0, 0.2)', 'rgb(204, 0, 102, 0.2)', 'rgb(255, 153, 51, 0.2)'],
              borderColor: ['rgba(10, 99, 132, 0.9)','rgba(66, 162, 235, 0.9)','rgba(200, 162, 235, 0.9)', 'rgba(120, 162, 235, 0.9)', 'rgb(0, 204, 0,0.9)', 'rgb(204, 0, 102, 0.9)', 'rgb(255, 153, 51, 0.9)'],
              
              
      }]},
      options: {
        title: {
          display: true,
          text: ["Leading reasons why teenagers in the United States feel that social media", "has a mostly negative effect on people their own age as of April 2018 "],
          fontFamily: "TrebuchetMS",
          fontSize: 20,
          fontColor: '#2b5797'
        },
        legend: {
            display: true,
            position: "left"   
        }
      }
    });

//positive reasons for social media verical BAR CHART
const posReasonsforSM = ["Connecting with friends/family", "Easier to find news/info", "Meeting others with the same interest", "Keeps you entertained", "Self-expression", "Others", "Getting support frmo others", "Learning new things"];
const posReasonsforSM_data= [40,16,14,9,7,6,5,4];

const posReasonsforSM_dataObj = {
  labels: posReasonsforSM,
  datasets: [
      {
          label: "Positive Reasons",
          data: posReasonsforSM_data,   
          borderWidth: 2,
          backgroundColor: ["hsl(314, 100%, 30%)", "hsl(314, 100%, 35%)", "hsl(314, 100%, 40%)", "hsl(314, 100%, 46%)", "hsl(314, 100%, 53%)", "hsl(314, 100%, 60%)", "hsl(314, 100%, 66%)", "hsl(314, 100%, 72%)"],
          borderColor: "black"
      }
  ]
}
new Chart("positiveffectsofsm-bar-chart",
      {
          type: "bar",
          data: posReasonsforSM_dataObj,
          options: { 
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                  display: true,
                  position: "top"   
              },
              title: {
                  display: true,
                  text: ["Leading reasons why teenagers in the United States feel that social media", "has a mostly positive effect on people their own age as of April 2018"],
                  fontFamily: "TrebuchetMS",
                  fontSize: 26,
                  fontColor: '#2b5797'
              },
              tooltips: {
                enabled: true,
                mode: 'single',
                callbacks: {
                    label: function(tooltipItems, data) {
                        return data.datasets[tooltipItems.datasetIndex].label + ': ' + tooltipItems.xLabel + ' %';
                    }
                }},
          }
      });


  // SCATTER Line


  const regression = [ ];

  for (i=0;i<=17.89; i++){
    yval = 53.761 - 0.333*i
    regression.push({ x:i, y:yval})
        }


      new Chart("associationbtwenanxietyscoreandwellbeingscore-scatterline-chart",{
          type: 'scatter',
          data: {
              datasets: [{
                type: 'scatter',
                 label: "average anxiety score against average wellbeing scores", 
                  data: [{
                    x: 12.57,
                    y: 49.43
                  },
                {
                    x: 10.47,
                    y: 50.00
                },{
                    x: 15.80,
                    y: 49.71
                  },
                {
                    x: 13.84,
                    y: 50.86
                },{
                    x: 13.59,
                    y: 50.14
                  },
                  {
                    x: 8.63,
                    y: 50.89
                  },
                {
                    x: 12.31,
                    y: 47.75
                },{
                    x: 17.89,
                    y: 46.28
                  }],
                  backgroundColor: 'rgb(255, 99, 132)'
          }, 
        {
            type: 'line',
            label: 'Regression Line',
            data: regression,
            backgroundColor: 'transparent',
            borderColor: 'rgb(54, 162, 235)'
        }]
          },
          options: { 

            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: ["Correlation between Avg Well-being and Avg Anxiety Score", "for aged 18 to 30 who engaged with Social media from 5 to 12 hours daily"],
                fontFamily: "TrebuchetMS",
                fontSize: 22,
                fontColor: '#2b5797'
            },
            scales: {
                x: {
                  type: 'linear',
                  position: 'bottom'
                }
              }
          }
      });

      
//    