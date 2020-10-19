const csv = require("csvtojson");
const fs = require("fs");
const MATCH_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYear = require("./ipl/matchesWonPerYear");
const extraRunConcededByEachTeam = require("./ipl/extraRunConcededByEachTeam");
const topEconomicalBowler = require("./ipl/topEconomicalBowler");
const matchStory = require("./ipl/matchStory");
const JSON_OUTPUT_FILE_PATH = "./public/data_matchesPlayedPerYear.json";
const JSON_OUTPUT_FILE_PATH_WON_PER_YEAR = "./public/data_matchesWonPerYear.json";
const JSON_OUTPUT_FILE_PATH_RUN_CONCEDED_BY_EACH_TEAM = "./public/data_extraRunConcededByEachTeam.json";
const JSON_OUTPUT_FILE_PATH_TOP_ECONOMICAL_BOWLER = "./public/data_topEconomicalBowler.json";
const JSON_OUTPUT_FILE_PATH_STORY = "./public/data_matchStory.json";

function main() {
    csv()
      .fromFile(MATCH_FILE_PATH)
      .then(matches => {
  
        csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {

            let result = matchesPlayedPerYear(matches);
            saveOutputFile(result,JSON_OUTPUT_FILE_PATH);
            let result1 = matchesWonPerYear(matches); 
            saveOutputFile(result1,JSON_OUTPUT_FILE_PATH_WON_PER_YEAR);
            let result2 = extraRunConcededByEachTeam(deliveries,matches);
            saveOutputFile(result2,JSON_OUTPUT_FILE_PATH_RUN_CONCEDED_BY_EACH_TEAM);
            let result3 = topEconomicalBowler(deliveries,matches);
            saveOutputFile(result3,JSON_OUTPUT_FILE_PATH_TOP_ECONOMICAL_BOWLER);
            let result4 = matchStory(matches);
            saveOutputFile(result4,JSON_OUTPUT_FILE_PATH_STORY);
        });
      });
  }

main();
function saveOutputFile(result,path)
{
    const jsonData = {
        Data : result
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile( path,jsonString,"utf8",err =>{
        if(err)
        {
            console.log(err);
        }
    });
}
