var page3 = 0;

const goPage2 = () => {
  document.body.style.backgroundColor = "black";
  document.getElementById('page1').style.display= "none";
  document.getElementById('page2').style.display = "block";
};

document.querySelector('#startBtn').onclick = goPage2;

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
  document.querySelector('#pagewrong_1').style.display = "none";
};

document.querySelector('#right_1').onclick = goPage5_1_1;

const goPage5_2 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_2').style.display = "block";
};

document.querySelector('#redpill').onclick = goPage5_2;
document.querySelector('#tryagain_2').onclick = goPage5_2;

const wrong_1 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "none";
  document.querySelector('#page5_1_1').style.display = "none";
  document.querySelector('#page5_2').style.display = "none";
  document.querySelector('#pagewrong_1').style.display = "block";
};

document.querySelector('#wrong_12').onclick = wrong_1;
document.querySelector('#wrong_13').onclick = wrong_1;
document.querySelector('#wrong_22').onclick = wrong_1;
document.querySelector('#wrong_23').onclick = wrong_1;

const wrong_2 = () => {
  document.querySelector('#page1').style.display = "none";
  document.querySelector('#page2').style.display = "none";
  document.querySelector('#page3').style.display = "none";
  document.querySelector('#page4').style.display = "none";
  document.querySelector('#page5_1').style.display = "none";
  document.querySelector('#page5_2').style.display = "none";
  document.querySelector('#pagewrong_2').style.display = "block";
};

document.querySelector('.wrong_2').onclick = wrong_2;
