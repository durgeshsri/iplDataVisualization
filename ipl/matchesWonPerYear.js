function matchesWonPerYear(matches)
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

 module.exports = matchesWonPerYear;