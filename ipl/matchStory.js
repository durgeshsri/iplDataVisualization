function matchStory(match)
{
  let result = {};
  for(let mat of match)
  {
    const winner = mat.winner;
    if(result[winner])
    {
      result[winner]+=1;
    }
    else{
      result[winner] = 1;
    }
  }
  return result;
}

module.exports = matchStory;