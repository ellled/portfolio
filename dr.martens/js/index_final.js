'use strict';
// 아코디언시작
let listElements = document.querySelectorAll('.link');

listElements.forEach((listElement) => {
  listElement.addEventListener('click', () => {
    if (listElement.classList.contains('active')) {
      listElement.classList.remove('active');
    } else {
      listElements.forEach((listE) => {
        listE.classList.remove('active');
      });
      listElement.classList.toggle('active');
    }
  });
});
// 아코디언끝

const navbarBurger = document.querySelector('.navbar_burger');
const navbarburgerback = document.querySelector('.navbar_burger_back');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarOverlay = document.querySelector('.navbar_overlay');

navbarBurger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
});

navbarburgerback.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  navbarOverlay.classList.remove('active');
});

navbarOverlay.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  navbarOverlay.classList.remove('active');
});

const active = document.querySelector('.active');
const body = document.querySelector('body');
const ham = document.querySelector('.ham');

// ===================================

const bs_contents_mobile = document.querySelector('.bs_contents_mobile'),
  firstImg = bs_contents_mobile.querySelectorAll('.bs_contents_mobile img')[0];

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const autoSlide = () => {
  if (
    bs_contents_mobile.scrollLeft -
      (bs_contents_mobile.scrollWidth - bs_contents_mobile.clientWidth) >
      -1 ||
    bs_contents_mobile.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;
  let valDifference = firstImgWidth - positionDiff;

  if (bs_contents_mobile.scrollLeft > prevScrollLeft) {
    return (bs_contents_mobile.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  bs_contents_mobile.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = bs_contents_mobile.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  bs_contents_mobile.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  bs_contents_mobile.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  bs_contents_mobile.classList.remove('dragging');

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

bs_contents_mobile.addEventListener('mousedown', dragStart);
bs_contents_mobile.addEventListener('touchstart', dragStart);

document.addEventListener('mousemove', dragging);
bs_contents_mobile.addEventListener('touchmove', dragging);

document.addEventListener('mouseup', dragStop);
bs_contents_mobile.addEventListener('touchend', dragStop);

// =======================================================================

const slide = new Swiper('.swiper-container.zero', {
  slidesPerView: 3,
  spaceBetween: 6,
  centeredSlides: true,
  loop: true,
});

// ======================================================

const swiper = new Swiper('.slide-content.first', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.first',
    prevEl: '.swiper-button-prev.first',
  },
});

// =====================================

const swiperplus = new Swiper('.slide-content.plus', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    prevEl: '.swiper-button-next.plus',
  },
});

// ==========================================================

const swiperthird = new Swiper('.swiper-container.third', {
  slidesPerView: 4,
  spaceBetween: 1,
  centeredSlides: true,
  grabCursor: true,
  centeredSlidesBounds: true,
  slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next.third ',
    prevEl: '.swiper-button-prev.third ',
  },
});

// ====================================================

const swiperfourth = new Swiper('.swiper.fourth', {
  slidesPerView: 7,
  spaceBetween: 0,
  loopAdditionalSlides: 1,
  grabCursor: true,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: false,
  navigation: {
    prevEl: '.swiper-button-next.fourth ',
  },
});
