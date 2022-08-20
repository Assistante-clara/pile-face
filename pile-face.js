
exports.action = function(data){

var randomNumber = Math.random();

//Check the random number to determine heads or tails
if (randomNumber < 0.5) {
  console.log("C'est pile!");
ClaraIASpeech("Je lance une pièce... c'est pile")
} else {
  console.log("C'est face!");
ClaraIASpeech("Je lance une pièce... c'est face")
}

}
