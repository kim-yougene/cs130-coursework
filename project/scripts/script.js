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


// // var pages = ["NewSite.html", "Intro.html", "tableofcontents.html", "ScarcityOfTime.html" ]
// /* 0 = lights off 1 = lights on */
// var lightcheck = 0
// //
// // /* This next part is our checker to see exactly what page we are on */
// //
// // for (counter = 0; counter < pages.length; counter += 1) {
// //     var path = window.location.pathname;
// //     var page = path.split("/").pop();
// //     if (page === pages[counter]) {
// //         pagebefore = pages[counter - 1];
// //         pageafter = pages[counter + 1];
// //     }
// //
// // }
// //
// //
// //
// //
// //
// // setTimeout(function() {
// //   $('#author').fadeOut('fast');
// // }, 5000);
// //
// // /* Bot Menu Functions */
// // //
// // // function homebutton() {
// // //     document.getElementsByClassName("goHome").className = "animated fadeOut";
// // //     setTimeout(home, 300);
// // // }
// // //
// // // function home() {
// // //     document.getElementsByClassName("goHome").className = "animated fadeIn";
// // //     window.location = "newsite.html";
// // // }
// // //
//     /* First check if lights are on/off , then turn off/turn on, respectively */
// function onoffcheck() {
//     if (lightcheck === 1) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// //
// // var iconnames = ["leftarrowicon", "rightarrowicon", "houseicon", "flashlighticon"]
// //
// //
// function flashlightbutton() {
//     document.getElementsByClassName("flashlight")
//     if (onoffcheck() === true) {
//
//         document.body.style.backgroundColor = "black";
//         document.body.color = "white";
//         lightcheck = 0;
//
//         }
//
//     else if (onoffcheck() === false) {
//         document.body.style.backgroundColor = "white";
//         document.body.color = "black";
//         lightcheck = 1;
//
//         }
//     }
//
//
// //
// //
// // /* Previous/Next Page buttons logic: have an array with all page names, then check via indexing what page I'm on,
// //     then add 1 to whichever index position I'm at, and finally direct me to that page with indexvalue + 1 */
// // //
// // // function prevpagebutton() {
// // //     document.getElementById("leftarrowicon").className = "animated fadeOut pull-left";
// // //     setTimeout(prevpage, 600);
// // // }
// // //
// // // function prevpage() {
// // //     document.getElementById("leftarrowicon").className = "animated fadeIn pull-left";
// // //     window.location = pagebefore;
// // // }
// // //
// // // function nextpagebutton() {
// // //     document.getElementById("rightarrowicon").className = "animated fadeOut pull-right";
// // //     setTimeout(nextpage, 600);
// // // }
// // //
// // // function nextpage() {
// // //     document.getElementById("rightarrowicon").className = "animated fadeIn pull-right";
// // //     window.location = pageafter;
// // //
// // // }
