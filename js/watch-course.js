let lessonContent = $('.course-content__lesson-header');

lessonContent.click((e) => {
  let item = $(e.target).closest('.course-content__lesson');
  let lessonDetails = item.find('.course-content__lesson-list');
  if(lessonDetails.attr('expanded') == 'false'){
    lessonDetails.show();
    let height = lessonDetails.prop('scrollHeight') + 28;
    lessonDetails.css({'height': height + 'px', 'padding': '16px 35px 16px 16px'});
    lessonDetails.attr('expanded', 'true');
    $(item).find('.arrow').css('transform', 'rotate(180deg)');
  } else {
    lessonDetails.css({'height': 0, 'padding':'0 35px 0 16px'});
    lessonDetails.on('transitionend', () => {
      lessonDetails.hide();
      lessonDetails.off('transitionend');
    })
    lessonDetails.attr('expanded', 'false')
    $(item).find('.arrow').css('transform', 'rotate(0deg)');
  }
});

plyr.setup("#plyr-video");

// let sideBarButton = $('.video__buttons-sidebar');
let sideBarButton = $('.sidebar-button');
let sideBar = $('.course-content');
let sideBarClose = $('.course-content__close');


$(document).click((e) => {
  if(sideBar.attr('expanded') == 'true'){
    let item = $(e.target)
    if(!item.closest('.course-content').length && !item.hasClass('sidebar-button')){
      toggleSidebar();
    }
  }
})
sideBarButton.click(toggleSidebar)
sideBarClose.click(toggleSidebar)

function toggleSidebar(){
  if(sideBar.attr('expanded') == 'false'){
    sideBar.attr('expanded', 'true');
    $('.video-page-main').addClass('expanded');
  } else {
    sideBar.attr('expanded', 'false');
    $('.video-page-main').removeClass('expanded');
  }
}

$(window).resize(() => {
  if($('body').innerWidth() >= 975){
    $('.video-page-main').removeClass('expanded');
  }
})

let reply = document.createElement('li');
reply.className = 'comments__new';
reply.innerHTML = `
<div class="comments__new-header">
  <h5 class="comments__new-title">اترك ردا</h5>
</div>
<form class="comments__new-form">
  <label for="">التعليق</label>
  <textarea class="comments__textarea w-100"></textarea>
</form>
<div class="comments__new-buttons d-flex justify-content-between align-items-center">
  <div class="comments__new-close button--secondary">
    الفاء الرد
  </div>
  <div class="button--primary">
    أرسل التعليق
  </div>
</div>
`;

$('.comments__reply-link').click((e) => {
  let comment = (e.target).closest('.comments__item');
  let replies = $(comment).find('.comments__replies');
  replies.append(reply);
  $('.comments__new-close').click((e) => {
    let cont = $(e.target).closest('.comments__new');
    cont.remove();
  })
})
