import * as data from './data.json' assert { type: "json" }
const jsonData = data.default;

const getElement = (jsonData) => {
  const imgObject = document.createElement("object");
  imgObject.setAttribute("data", jsonData.icon);

  const scoreName = document.createElement("span");
  scoreName.classList.add("score-name");
  scoreName.textContent = jsonData.category;

  const imageAndName = document.createElement("div");
  imageAndName.appendChild(imgObject);
  imageAndName.appendChild(scoreName);

  const scoreValue = document.createElement("span");
  scoreValue.classList.add("score-value");
  scoreValue.textContent = jsonData.score;

  const totalScore = document.createElement("span");
  totalScore.textContent = " / 100";

  const scoreDiv = document.createElement("div");
  scoreDiv.appendChild(scoreValue);
  scoreDiv.appendChild(totalScore);

  const divContainer = document.createElement("div");
  divContainer.classList.add("result-summary-score");
  divContainer.appendChild(imageAndName);
  divContainer.appendChild(scoreDiv);
  
  return divContainer;
}

document.addEventListener("DOMContentLoaded", function(){
  
  const scoresContainer = document.getElementsByClassName("result-summary-scores")[0];
  // console.log(scoresContainer);

  jsonData.forEach((elem) => {
    // console.log(getElement(elem));
    scoresContainer.appendChild(getElement(elem));
  })
  
  
});