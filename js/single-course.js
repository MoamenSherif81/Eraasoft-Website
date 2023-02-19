let videoIframe = $('.single-course__iframe');
let tabsContent = $('.single-course__tab-info-content');
let tabs = $('.single-course__tabs-item');
let lessonContent = $('.single-course__lesson-expand');

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

tabs.click((e) => {
  activeTab(e.target)
})
activeTab(tabs[0]);

function activeTab(tab){
  tabs.removeClass('active');
  $(tab).addClass('active');
  let currTab = $(tabsContent).filter(`[data-id="${$(tab).attr('target-id')}"]`);
  let prevTab = $(tabsContent).filter(`[tab-active="true"]`);
  prevTab.attr('tab-active', 'false');
  currTab.attr('tab-active', 'true');
  prevTab.fadeOut('fast', () => {
    currTab.fadeIn();
  });
}


lessonContent.click((e) => {
  let id = $(e.target).closest('.single-course__lesson-expand').attr('target-id');
  let item = $(e.target).closest('.single-course__lesson');
  let lessonDetails = item.find('.single-course__lesson-details');
  console.log(lessonDetails);
  if(lessonDetails.attr('data-id') == id){
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
  }
});