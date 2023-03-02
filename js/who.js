const divs = $('.timetable__line-progress')

$(window).scroll(handleTimeTable)
handleTimeTable();

function handleTimeTable(){
  for(let i = 0; i < divs.length; i++){
    const bottomScrollPosition = window.scrollY + $(window).height();
    let backHeight = bottomScrollPosition - $(divs[i]).offset().top - $(divs[i]).height() - 100;
    if(backHeight >= 6) {
      $(divs[i]).css({'background-position-y':0})
    } else {
      $(divs[i]).css({'background-position-y':backHeight + 'px'})
    }
  }
}

let feelConts = $('.feel__cont');

$(document).ready(() => {
  feelHeights();
})

function feelHeights(){
  let maxiHeight = 0;
  for(let i = 0; i < feelConts.length; i++){
    maxiHeight = Math.max(maxiHeight, $(feelConts[i]).height());
  }
  feelConts.height(maxiHeight);
}

var swiper = new Swiper(".reviews__slider", {
  breakpoints: {
    0:{
      slidesPerView: 1
    },
    991: {
      slidesPerView: 2
    }
  },
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".reviews__swiper-pagination",
    clickable: true,
  },
});