const csv = require("csvtojson");
const MATCHES = "./csv_data/matches.csv";
const DELI = "./csv_data/deliveries.csv";
const data = require("./public/data_extraRunConcededByEachTeam.json")
const data1 = require("./public/data_matchStory.json")


//console.log(data1)
let result =[];
for(let a in data1.Data)
{
   result.push({'name':a, y:data1.Data[a]})
}
console.log(result)
//csv().fromFile(MATCHES).then(match=> console.log(match.filter(x=> x.winner == "Mumbai Indians" && x.season == "2008")))
csv()
.fromFile(MATCHES)
.then(match=> {
  csv()
  .fromFile(DELI)
  .then(deliv=>  {
    //console.log(bowlingEconomy(deliv,match))
      //   let arr = [];
  //  match.map(x=> x.season == '2015' ? arr.push(x):arr);
  //  console.log(arr[0].id);
  //  console.log(arr[arr.length-1].id) 

//console.log(matchStory(match))
  });
  });
// let x = {};
// x['y'] = [1,5]
// x['y'] = [x['y'][0]+1,x['y'][1]+6]
// console.log(x)
function matchStory(match)
{
  let result = {}
  for(let mat of match)
  {
    const winner = mat.winner;
    if(result[winner])
    {
      result[winner]+=1
    }
    else{
      result[winner] = 1
    }
  }
  return result
}
// function story(match)
// {
//   let result ={};
//   let arr=[];
//   for(let mat of match)
//   {
//     const venue = mat.venue
//      if(result[venue]){}
//      else
//      {
//        result[venue] = 1
//        arr.push(venue)
//      }
//   }
//   let arr1 = [];
//   for(let i=0;i<arr.length;i++)
//   {
//      let result1 = {};
//       for(let matc of match)
//       {
//           const winner = matc.winner;
//           const venue = matc.venue;
//           if(venue == arr[i])
//           {
//            if (result1[winner])
//            {
//                result1[winner]+=1;
//            }
//            else 
//            {
//                result1[winner]=1
//            }
//       } 
//   }
//   arr1.push(result1)
//  }
//   return arr1
// }





function bowlingEconomy(deli,match)
{

  let arr = [];
  match.map(x=> x.season == '2015' ? arr.push(x):arr)
  let result = {};
  for(let del of deli)
  {
      const bowler = del.bowler
      if(parseInt(del.match_id) >=arr[0].id && parseInt(del.match_id) <= arr[arr.length-1].id)
      {
          if(result[bowler])
          {
            result[bowler] = [result[bowler][0] + 1, result[bowler][1]+parseInt(del.total_runs)]
          }
          else
          {
            result[bowler] = [1, parseInt(del.total_runs)]
          }
      }
  }
//return result['UT Yadav'][1]/(result['UT Yadav'][0]/6)
for(let bowler in result)
{
 result[bowler] = result[bowler][1]/(result[bowler][0]/6)
}

const result1 = Object.entries(result)
    .sort(([,a],[,b]) => a-b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

const result2 = Object.keys(result1).slice(0, 10).reduce((result, key) => {
      result[key] = result1[key];

      return result;
  }, {});

    return result2;
}
// let seriesData = [];
//   for (let year in data.Data) 
//   {
//     seriesData.push([year, data.Data[year]]);
//   }

// console.log(seriesData)

function extraRuns(deli,match)
{
  let arr = [];
  match.map(x=> x.season == '2016' ? arr.push(x):arr)
  let result = {};
  for(let del of deli)
  {
    const bowlingTeam = del.bowling_team
  if(parseInt(del.match_id) >=arr[0].id && parseInt(del.match_id) <= arr[arr.length-1].id)
  {
    
    if(result[bowlingTeam])
    {
      
      result[bowlingTeam] += parseInt(del.extra_runs);
    }
    else
    {
      result[bowlingTeam] = parseInt(del.extra_runs);
    }
  }
  }
return result;
}  






//console.log(matches.slice(0,2));
function wonPerYear(matches)
 {
     
     let arr = [];
     for(let i=2008;i<2020;i++)
     {
        let result = {};
         for(let match of matches)
         {
             const winner = match.winner;
             const season = match.season;
             if(parseInt(season) == i)
             {
              if (result[winner])
              {
                  result[winner]+=1;
              }
              else 
              {
                  result[winner]=1
              }
         } 
     }
     arr.push(result)
    }
     return arr
 }
 

 function matchesPlayedPerYear(matches) {
    const result = {};
    for (let match of matches) {
      const season = match.season;
      if (result[season]) {
        result[season] += 1;
      } else {
        result[season] = 1;
      }
    }
    return result;
  }