const date = new Date();
$('.footer__date').text(date.getFullYear())

let navMobile = $('.nav__mobile')
$('.nav__side-nav-icon').click(toggleNav);
$('.nav__mobile-side-close').click(toggleNav);

$(window).on('resize', () => {

})

function toggleNav(){
  if(!navMobile.hasClass('expanded')){
    $('html').css({'overflow':'hidden'})
    $(document.body).css({'overflow':'hidden'})
  } else {
    $('html').css({'overflow':'visible'})
    $(document.body).css({'overflow':'visible'})
  }
  navMobile.toggleClass('expanded');
}

function calcVideoHeight(video){
  video.height(video.width() * 9 / 16)
}