var highScores = [];
var scoreTableEl = document.querySelector("#score-table");

var loadScores = function() { 
    highScores = JSON.parse(localStorage.getItem("scores")) || [];

    if (highScores.length === 0) {
        var noScores = document.createElement("div");
        noScores.setAttribute("style", "text-align: center");
        noScores.textContent = "There are no scores yet! Play the quiz to add your score!";
        document.querySelector("#score-card").appendChild(noScores);
        return false;
    }

    highScores.sort(compare);
};

var compare = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);
    return scoreB - scoreA;
};

var createScoreTable = function() {
    for (var i = 0; i < highScores.length; i++) {
        var scoreRow = document.createElement("tr");
        scoreTableEl.appendChild(scoreRow);

        var nameCell = document.createElement("td");
        nameCell.className = "table-name-data";
        nameCell.textContent = highScores[i].name;
        scoreRow.appendChild(nameCell);

        var scoreCell = document.createElement("td");
        scoreCell.className = "table-score-data";
        scoreCell.setAttribute("style", "text-align: right");
        scoreCell.textContent = highScores[i].score;
        scoreRow.appendChild(scoreCell);
    }
};

loadScores();
createScoreTable();
