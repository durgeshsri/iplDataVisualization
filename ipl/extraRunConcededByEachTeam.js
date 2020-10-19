function extraRunConcededByEachTeam(deli,match)
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

module.exports = extraRunConcededByEachTeam;