let videoIframe = $('.single-course__iframe');
let tabsContent = $('.single-course__tab-info-content');
let tabs = '.single-course__tabs-item';
let lessonContent = $('.single-course__lesson-expand');

let urlParams = new URLSearchParams(window.location.search);
let courseId = urlParams.get('courseId');
// Return to home if there is no cardId parameter in the url
if(courseId == null) window.location.href = 'index.html';

$('.single-course__video').click(() => {
  //single-course__iframe
  $('.single-course__video-placeholder').fadeOut(() => {
    videoIframe.attr('src', videoIframe.attr('data-src'));
    videoIframe.fadeIn();
  })
})

calcVideoHeight(videoIframe);
$(window).resize(() => {
  calcVideoHeight(videoIframe);
})

let tabsSystem = new Tabs(tabs, tabsContent);

lessonContent.click((e) => {
  let item = $(e.target).closest('.single-course__lesson');
  let lessonDetails = item.find('.single-course__lesson-details');
  if(lessonDetails.attr('expanded') == 'false'){
    lessonDetails.show();
    let height = lessonDetails.find('.single-course__lesson-details-item').prop('scrollHeight') + 48;
    lessonDetails.css({'height': height + 'px'});
    lessonDetails.attr('expanded', 'true');
    $(item).find('.arrow').css('transform', 'rotate(90deg)');
  } else {
    lessonDetails.css({'height': 0});
    lessonDetails.on('transitionend', () => {
      lessonDetails.hide();
      lessonDetails.off('transitionend');
    })
    lessonDetails.attr('expanded', 'false')
    $(item).find('.arrow').css('transform', 'rotate(0deg)');
  }
});