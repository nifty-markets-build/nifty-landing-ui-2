// Your code goes here
// nav anchors change color mouseover
const navi = document.querySelector('nav');
navi.addEventListener('mouseover', function (event) {
    event.target.style.color = "blue";
    setTimeout(function () {
        event.target.style.color = "";
    }, 400);
}, false);

// key down
const headerP = document.querySelector('.intro p');
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ') {
        headerP.style.color = "red";
    }
});

// key up
document.addEventListener('keyup', function (event) {
    if (event.code == 'KeyZ') {
        headerP.style.color = "";
    }
});


//drag / drop
const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('dragend', suchaDrag());
function suchaDrag() {
    this.style.width = '200px';
}

//clicking logo refreshes page
const logoRefresh = document.querySelector('.logo-heading');
logoRefresh.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});


//Focus
const imageContent = document.querySelectorAll('.img-content');
imageContent.forEach(function (element) {
    element.tabIndex = 1;
    element.addEventListener('focus', function (event) {
        event.target.style.border = '12px solid red';
    });
    element.addEventListener('blur', function(event) {
        event.target.style.border = '';
      });
});


//nav anchors change font color on doubleclick
navi.addEventListener('dblclick', function (event) {
    event.target.style.color = "orange";
});


//nav prevent default
navi.addEventListener('click', function (event) {
    event.preventDefault()
});

//change img on hover with mouseovere/mouseout
// const busImg = document.querySelector('img');
// busImg.addEventListener('mouseover', () => {
//     event.target.setAttribute('src', 'img/funbus.png');
//     busImg.addEventListener('mouseout', () => {
//         event.target.setAttribute('src', 'img/fun-bus.jpg');
//     });
// });

//click bus pic vanish bus pic
busImg.addEventListener('click', function (event) {
    event.target.style.display = "none";
    setTimeout(() => {
        event.target.style.display = "";
    }, 900);
}, false);



//click footer vanish footer
const foot = document.querySelector('footer');
foot.addEventListener('click', function (event) {
    event.target.style.display = "none";
    setTimeout(() => {
        event.target.style.display = "";
    }, 900);
}, false);



//