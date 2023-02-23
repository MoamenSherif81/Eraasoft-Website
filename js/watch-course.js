let lessonContent = $('.course-content__lesson-header');

lessonContent.click((e) => {
  let item = $(e.target).closest('.course-content__lesson');
  let lessonDetails = item.find('.course-content__lesson-list');
  if(lessonDetails.attr('expanded') == 'false'){
    lessonDetails.show();
    let height = lessonDetails.prop('scrollHeight') + 28;
    lessonDetails.css({'height': height + 'px', 'padding': '16px'});
    lessonDetails.attr('expanded', 'true');
    $(item).find('.arrow').css('transform', 'rotate(180deg)');
  } else {
    lessonDetails.css({'height': 0, 'padding':'0 16px'});
    lessonDetails.on('transitionend', () => {
      lessonDetails.hide();
      lessonDetails.off('transitionend');
    })
    lessonDetails.attr('expanded', 'false')
    $(item).find('.arrow').css('transform', 'rotate(0deg)');
  }
});

plyr.setup("#plyr-video");