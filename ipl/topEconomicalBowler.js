function topEconomicalBowler(deli,match)
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

module.exports = topEconomicalBowler;