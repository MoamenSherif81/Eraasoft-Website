let videoIframe = $('.main-section__iframe');
let questions = $('.questions__answer-cont');

$('.main-section__video').click(() => {
  //main-section__iframe
  $('.main-section__video-placeholder').fadeOut(() => {
    videoIframe.attr('src', videoIframe.attr('data-src'));
    videoIframe.fadeIn();
  })
})

calcVideoHeight(videoIframe);
$(window).resize(() => {
  calcVideoHeight(videoIframe);
})


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

$(window).resize(function(){
  swiper.update();
 });
 $(window).on('load', function () {
  swiper.update();
 });

$(document).ready(() => {
  toggleFAQ(questions[0]);
})
$('.questions__single-title').click((e) => {
  let id = $(e.target).attr('targetId');
  for(let i = 0; i < questions.length; i++){
    if($(questions[i]).attr('id') == id || $(questions[i]).attr('expanded') == 'true'){
      toggleFAQ(questions[i]);
    }
  }
});

function toggleFAQ(question){
  if($(question).attr('expanded') == 'false'){
    $(question).show();
    let height = $(question).find('.questions__answer').prop('scrollHeight') + 48;
    $(question).css({'height': height + 'px', 'padding': '20px 20px'});
    $(question).attr('expanded', 'true');
    $(question).closest('.questions__item').find('.questions__sign2').removeClass('active');
  } else {
    $(question).css({'height': 0, 'padding': '0 20px'});
    $(question).on('transitionend', () => {
      $(question).hide();
      $(question).off('transitionend');
    })
    $(question).attr('expanded', 'false')
    $(question).closest('.questions__item').find('.questions__sign2').addClass('active');
  }
}