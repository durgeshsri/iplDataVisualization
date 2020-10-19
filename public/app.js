// 1st Visualization(Question Number 1)
// Match played per year by whole teams

function fetchAndVisualizeData() {
    fetch("./data_matchesPlayedPerYear.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.Data);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(Data) {
    const seriesData = [];
    for (let year in Data) {
      seriesData.push([year, Data[year]]);
    }
  
    Highcharts.chart("matches-played-per-year", {
      chart: {
        type: "column"
      },
      title: {
        text: "1. Matches Played Per Year"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Matches"
        }
      },
      series: [
        {
          name: "Years",
          data: seriesData,
          dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',

            //format: '{point.y:.1f}', // one decimal
            y: 25, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
      }
      ]
    });
  }



  // 2nd visualization(Question Number2)
 // Matches won per year by each team.

  function fetchAndVisualizeData1() {
    fetch("./data_matchesWonPerYear.json")
      .then(r => r.json())
      .then(visualizeData1);
  }
  
  fetchAndVisualizeData1();
  
  function visualizeData1(data) {
    visualizeMatchesPlayedPerYear1(data.Data);
    return;
  }
  
  function visualizeMatchesPlayedPerYear1(Data) {
  const kkr = [];
  const rcb = [];
  const csk = [];
  const kxp = [];
  const rr =[];
  const dd = [];
  const mi = [];
  const dc = [];
  const ktk = [];
  const pw = [];
  const nr = [];
  const sh = [];
  const rps = [];
  const gl = [];
  const dcl = [];
  
  for (let won in Data) {
    kkr.push(Data[won]['Kolkata Knight Riders']);
    rcb.push(Data[won]['Royal Challengers Bangalore']);
    csk.push(Data[won]['Chennai Super Kings'] || "");
    kxp.push(Data[won]['Kings XI Punjab']);
    rr.push(Data[won]['Rajasthan Royals'] || "");
    dd.push(Data[won]['Delhi Daredevils'] || "");
    mi.push(Data[won]['Mumbai Indians'] || "");
    dc.push(Data[won]['Deccan Chargers'] || "");
    ktk.push(Data[won]['Kochi Tuskers Kerala'] || "");
    pw.push(Data[won]['Pune Warriors'] || "");
    nr.push(Data[won][''] || "");
    sh.push(Data[won]['Sunrisers Hyderabad'] || "");
    rps.push(Data[won]['Rising Pune Supergiants'] || "");
    gl.push(Data[won]['Gujarat Lions'] || "");
    dcl.push(Data[won]['Delhi Capitals'] || "");
  }

  Highcharts.chart('matches-won-each-per-year', {
    chart: {
        type: 'column'
    },
    title: {
        text: '2. Number of matches won by each team over all the year of IPL'
    },
    subtitle: {
        text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
        categories: ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Kolkata Knight Riders',
        data: kkr
  
    }, {
        name: 'Royal Challengers Bangalore',
        data: rcb
  
    }, {
        name: 'Chennai Super Kings',
        data: csk
  
    }, {
      name: 'Kings XI Punjab',
      data: kxp

     },
     {
      name: 'Rajasthan Royals',
      data: rr

     },
     {
      name: 'Delhi Daredevils',
      data: dd

    },
    {
      name: 'Mumbai Indians',
      data: mi

    },
    {
      name: 'Deccan Chargers',
      data: dc

    },
    {
      name: 'Kochi Tuskers Kerala',
      data: ktk

    },
    {
      name: 'Pune Warriors',
      data: pw

    },
    {
      name: 'noResult',
      data: nr

    },
    {
      name: 'Sunrisers Hyderabad',
      data: sh

    },
    {
      name: 'Rising Pune Supergiants',
      data: rps

    },
    {
      name: 'Gujarat Lions',
      data: gl

    },
    {
        name: 'Delhi Capitals',
        data: dcl
  
    }]
  });
  
}


// 3rd Visualization (Question Number 3rd)
// Extra Run Conceded by each team in IPL-2016

function fetchAndVisualizeData2() {
    fetch("./data_extraRunConcededByEachTeam.json")
      .then(r => r.json())
      .then(visualizeData2);
  }
  
  fetchAndVisualizeData2();
  
  function visualizeData2(data) {
    visualizeMatchesPlayedPerYear2(data.Data);
    return;
  }
  
  function visualizeMatchesPlayedPerYear2(Data) {
    const seriesData = [];
    for (let team in Data) {
      seriesData.push([team, Data[team]]);
    }
  
    Highcharts.chart("extra-run-conceded-by-each-team", {
      chart: {
        type: "column"
      },
      title: {
        text: "3. Extra Run Conceded By Each Team in IPL-2016"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Extra Runs"
        }
      },
      series: [
        {
          name: "Teams",
          data: seriesData,
          dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',

            //format: '{point.y:.1f}', // one decimal
            y: 25, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
        }
      ]
    });
  }



  // 4th Visualization 
  // Top 10 economical Bowler of IPL-2015


  function fetchAndVisualizeData3() {
    fetch("./data_topEconomicalBowler.json")
      .then(r => r.json())
      .then(visualizeData3);
  }
  
  fetchAndVisualizeData3();
  
  function visualizeData3(data) {
    visualizeMatchesPlayedPerYear3(data.Data);
    return;
  }
  
  function visualizeMatchesPlayedPerYear3(Data) {
    const seriesData = [];
    for (let bowler in Data) {
      seriesData.push([bowler, Data[bowler]]);
    }
  
    Highcharts.chart("top-economical-bowler", {
      chart: {
        type: "column"
      },
      title: {
        text: "4. Top 10 Economical Bowler of IPL-2015"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      series: [
        {
          name: "Bowlers",
          data: seriesData,
          dataLabels: {
            enabled: true,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',

            format: '{point.y:.2f}', // one decimal
            y: 25, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
      }
      ]
    });
  }



//5th Visulization(Qustion number 5)
// Story of the ipl dataset


function fetchAndVisualizeData4() {
  fetch("./data_matchStory.json")
    .then(r => r.json())
    .then(visualizeData4);
}

fetchAndVisualizeData4();

function visualizeData4(data) {
  visualizeMatchesPlayedPerYear4(data.Data);
  return;
}

function visualizeMatchesPlayedPerYear4(Data) {
  const seriesData = [];
  for (let a in Data) {
    seriesData.push({'name':a, y:Data[a]});
  }

  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    })
});

// Build the chart
Highcharts.chart('match-story-of-ipl', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: '5. Match Story(Match Win percent by each team in all seasons of IPL)'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              connectorColor: 'silver'
          }
      }
  },
  series: [{
      name: 'Win Percent',
      data: seriesData
  }]
});
}