setInterval(function () {
  let font1 = document.querySelector('.font1');
  let font2 = document.querySelector('.font2');
  let font3 = document.querySelector('.font3');
  let font4 = document.querySelector('.font4');
  let font5 = document.querySelector('.font5');
  let font6 = document.querySelector('.font6');
  if (font1.classList.contains('font1')) {
    font1.classList.remove('font1');
    font1.classList.add('font2');
  }
  if (font2.classList.contains('font2')) {
    font2.classList.remove('font2');
    font2.classList.add('font3');
  }
  if (font3.classList.contains('font3')) {
    font3.classList.remove('font3');
    font3.classList.add('font4');
  }
  if (font4.classList.contains('font4')) {
    font4.classList.remove('font4');
    font4.classList.add('font5');
  }
  if (font5.classList.contains('font5')) {
    font5.classList.remove('font5');
    font5.classList.add('font6');
  }
  if (font6.classList.contains('font6')) {
    font6.classList.remove('font6');
    font6.classList.add('font1');
  }
}, 1000);

//======================================================

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});

//===================================================
// let items = document.querySelectorAll('.mockup');

// function scrollEvent() {
//   let windowHeight = window.innerHeight;

//   items.forEach((item) => {
//     let itemLocation = item.getBoundingClientRect().top;
//     if (windowHeight > itemLocation + 600) {
//       item.classList.add('active');
//     }
//   });
// }
// window.addEventListener('scroll', scrollEvent);

// gsap.registerPlugin(ScrollTrigger);
gsap.from('.udemy_mockup', {
  scrollTrigger: {
    trigger: '.udemy_mockup',
    // markers: true,
    start: 'top center',
    end: 'top center',
    scrub: true,
  },
  y: 400,
  duration: 4,
});
gsap.from('.udemy_logo', {
  scrollTrigger: {
    trigger: '.udemy_logo',
    // markers: true,
    start: 'top center',
    end: 'top center',
    scrub: true,
  },
  x: 400,
  duration: 4,
});

//====================

gsap.from('.dm_mockup', {
  scrollTrigger: {
    trigger: '.dm_mockup',
    // markers: true,
    start: 'top center',
    end: 'top center',
    scrub: true,
  },
  x: 400,
  duration: 4,
});
gsap.from('.dm_logo', {
  scrollTrigger: {
    trigger: '.dm_logo',
    // markers: true,
    start: 'top 100%',
    end: 'top 100%',
    scrub: true,
  },
  y: 400,
  duration: 4,
});
