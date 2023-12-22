 //function updateModifier (scoreId, modId) { 

  //  var scoreId = document.getElementById(scoreId).value;
  //  document.getElementById(modId).value = Math.floor((scoreId -10)/2);
//}

function updateModifier (scoreId, modId) {
    var scoreElement = document.getElementById(scoreId);
    var modElement = document.getElementById(modId);

    if (scoreElement.value ==='') {
        modElement.value =modElement.ariaPlaceholder;
    } else {
        var score = parseInt(scoreElement.value, 10);
        modElement.value = Math.floor((score-10)/2);
    }
}

function updateProf() {

    let lvl = parseInt(document.getElementById('lvl').value);

    let profBonus = Math.floor((lvl - 1) /4) +2;

    document.getElementById('profBonus').value=profBonus;
}
