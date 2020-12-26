
// swiper slider init
var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  speed: 800,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  effect: 'fade',
})


// scroll on click
const mouse = document.getElementById('mouse_icon');
mouse.addEventListener('click', function () {
  window.scrollTo(0, window.innerHeight)
});

// fit text
let minFontSize = 20;
let maxFontSize = 48;
if (window.innerWidth < 1200) {
  maxFontSize = 36;
} 
 if (window.innerWidth < 991) {
  maxFontSize = 30;
  minFontSize = 18;
}
 if (window.innerWidth < 768) {
  maxFontSize = 24;
  minFontSize = 16;
}
if (window.innerWidth < 575) {
  minFontSize = 14;
}

textFit(document.getElementsByClassName('slide_description'), {
  multiLine: true, 
  minFontSize:minFontSize, 
  maxFontSize: maxFontSize
});

// header change on scroll
const header = document.getElementById('header');

document.addEventListener('scroll', function() {
  if (window.scrollY > (window.innerHeight / 4)) {
    header.classList.add('change');
  } else {
    header.classList.remove('change');
  }
});

// video controls
const video = document.getElementById('loft_video');
const videoButton = document.getElementById('play_btn');
const videoOverlay = document.getElementById('video_overlay');
const videoWrapper = document.getElementById('video_wrapper');

videoButton.addEventListener('click', function () {
    video.play();
    videoOverlay.classList.add('hide');
    videoWrapper.classList.add('wide');
});

video.addEventListener('click', function () {
    video.pause();
    videoOverlay.classList.remove('hide');
    videoWrapper.classList.remove('wide');
});

// hamburger control
const hamburger = document.getElementById('hamburger');
const mainMenu = document.getElementById('main_menu');
hamburger.addEventListener('click', function () {
  if (this.classList.contains('is-active')) {
    this.classList.remove('is-active');
    mainMenu.classList.remove('open');
  } else {
    this.classList.add('is-active');
    mainMenu.classList.add('open');
  }
});

for (let i = 0; i < mainMenu.children.length; i++) {
  mainMenu.children[i].addEventListener('click', function () {
    hamburger.classList.remove('is-active');
    mainMenu.classList.remove('open');
  });
}
