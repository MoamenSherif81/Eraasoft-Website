let videoIframe = $('.strategy__iframe');
let questions = $('.questions__answer-cont');

$('.strategy__video').click(() => {
  $('.strategy__video-placeholder').fadeOut(() => {
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


$(document).ready(() => {
  toggleFAQ(questions[0]);
})

$('.questions__single-title').click((e) => {
  let id = $(e.target).attr('targetId');
  for(let i = 0; i < questions.length; i++){
    if($(questions[i]).attr('id') == id || $(questions[i]).attr('expanded') == 'true'){
      toggleFAQ(questions[i]);
    } else {
      $(questions[i]).hide();
      $(questions[i]).off('transitionend');
      $(questions[i]).attr('expanded', 'false');
    }
  }
});

function toggleFAQ(question){
  
  if($(question).attr('expanded') == 'false'){
    $(question).off('transitionend');
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


const statNumbers = document.querySelector('.statistics');

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.querySelectorAll('.statistics__number').forEach((ele) => {
        const odometer = new Odometer({el: ele, format: 'd'})
        ele.innerHTML = $(ele).attr('number');
      })
      observer.unobserve(entry.target);
    }
  });
});

observer2.observe(statNumbers);