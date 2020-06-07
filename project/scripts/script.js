var page3 = 0;



const goPage1point5 = () => {
  document.getElementById('page1').style.display= "none";
  document.getElementById('page1point5').style.display ="block";
}
document.querySelector('#startBtn').onclick = goPage1point5;





const goPage2 = () => {
  var userName = document.querySelector('#yourName').value;
  document.getElementById('greeting').innerHTML = "Hello " + userName + ". You have been sleeping in all your classes here at Zoom University. In order to graduate, you need to take this test.";;
  document.body.style.backgroundColor = "black";
  document.getElementById('page1point5').style.display= "none";
  document.getElementById('page2').style.display = "block";
};

document.querySelector('#nameSubmit').onclick = goPage2;






const goPage3 = () => {
  document.body.style.backgroundColor = "white";
  document.getElementById('page1').style.display= "none";
  document.getElementById('page2').style.display = "none";
  document.getElementById('page3').style.display = "block";
  page3 = 1;
};

document.querySelector('#flashlight').onclick = goPage3;

function update(e){
  if(page3 == 1){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
    document.querySelector('#page3').style.setProperty('--cursorX', x + 'px')
    document.querySelector('#page3').style.setProperty('--cursorY', y + 'px')
  }
  else {
    null;
  }
}

document.addEventListener('mousemove',update);
document.addEventListener('touchmove',update);

const goPage4 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "block";
  page2 = 0;
};

document.querySelector('#door').onclick = goPage4;

const goPage5_1 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "block";
  document.querySelector('#page5_1_1').style.display = "none";
  document.querySelector('#page5_1_2').style.display = "none";
  document.querySelector('#pagewrong_1').style.display = "none";
};

document.querySelector('#bluepill').onclick = goPage5_1;
document.querySelector('#tryagain_1').onclick = goPage5_1;

const goPage5_1_1 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "none";
  document.querySelector('#page5_1_1').style.display = "block";
  document.querySelector('#page5_1_2').style.display = "none";
  document.querySelector('#pagewrong_1').style.display = "none";
};

document.querySelector('#right_1').onclick = goPage5_1_1;

const goPage5_1_2 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "none";
  document.querySelector('#page5_1_1').style.display = "none";
  document.querySelector('#page5_1_2').style.display = "block";
  document.querySelector('#pagewrong_1').style.display = "none";
};

document.querySelector('#right_1_1').onclick = goPage5_1_2;

const wrong_1 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "none";
  document.querySelector('#page5_1_1').style.display = "none";
  document.querySelector('#page5_1_2').style.display = "none";
  document.querySelector('#pagewrong_1').style.display = "block";
};

document.querySelector('#wrong_12').onclick = wrong_1;
document.querySelector('#wrong_13').onclick = wrong_1;
document.querySelector('#wrong_14').onclick = wrong_1;
document.querySelector('#wrong_15').onclick = wrong_1;
document.querySelector('#wrong_16').onclick = wrong_1;
document.querySelector('#wrong_17').onclick = wrong_1;

const goPage5_2 = () => {
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_2').style.display = "block";
  document.querySelector('#pagewrong_2').style.display = "none";
};

document.querySelector('#redpill').onclick = goPage5_2;
document.querySelector('#tryagain_2').onclick = goPage5_2;

const goPage5_2_1 = () => {
  document.querySelector('#page5_2').style.display = "none";
  document.querySelector('#page5_2_1').style.display = "block";
};

document.querySelector('#right_2').onclick = goPage5_2_1;

const goPage5_2_2 = () => {
  document.querySelector('#page5_2').style.display = "none";
  document.querySelector('#page5_2_1').style.display = "none";
  document.querySelector('#page5_2_2').style.display = "block";
};

document.querySelector('#right_2_1').onclick = goPage5_2_2;

const wrong_2 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_2').style.display = "none";
  document.querySelector('#page5_2_1').style.display = "none";
  document.querySelector('#page5_2_2').style.display = "none";
  document.querySelector('#pagewrong_2').style.display = "block";
};

document.querySelector('#wrong_22').onclick = wrong_2;
document.querySelector('#wrong_23').onclick = wrong_2;
document.querySelector('#wrong_24').onclick = wrong_2;
document.querySelector('#wrong_25').onclick = wrong_2;
document.querySelector('#wrong_26').onclick = wrong_2;
document.querySelector('#wrong_27').onclick = wrong_2;

const goPage6 = () => {
  document.querySelector('#page5_1_2').style.display = "none";
  document.querySelector('#page5_2_2').style.display = "none";
  document.querySelector('#page6').style.display = "block";
};

document.querySelector('#right_1_2').onclick = goPage6;
document.querySelector('#right_2_2').onclick = goPage6;



var answerswrong = 0

const checkAnswer = ()=>{
  if (document.querySelector('#answer').value.toUpperCase() == "WHEAT") {
    document.querySelector('#page6').style.display = "none"
    document.querySelector('#puzzleWin').style.display = "block"

  }

  if (document.querySelector('#answer').value.toUpperCase() != "WHEAT") {
    answerswrong +=1
    alert("Incorrect. You have " + String((3 - answerswrong)) +" tries left!")

  if (answerswrong == 3) {
    document.querySelector('#page6').style.display = "none"
    document.querySelector('#puzzleFail').style.display ="block"

  }
  }


}




document.querySelector('#answerSubmit').onclick = checkAnswer
