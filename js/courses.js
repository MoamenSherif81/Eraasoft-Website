$('.courses__layout-icon-cont').click((e) => {
  if(!($(e.target).hasClass('active') || $(e.target).closest('.courses__layout-icon-cont').hasClass('active'))){
    toggleLayout();
  }
})

function toggleLayout(){
  if($('.layout-blocks').hasClass('active')){
    $('.layout-blocks').removeClass('active');
    $('.layout-list').addClass('active');
    $('.courses__course-cont').addClass('list');
  } else {
    $('.layout-blocks').addClass('active');
    $('.layout-list').removeClass('active');
    $('.courses__course-cont').removeClass('list');
  }
}