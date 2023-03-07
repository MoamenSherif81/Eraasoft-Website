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

let courses = $('.courses__course');
$('.courses__search-input').keypress(function(event) {
  if (event.key == 'Enter') {
    let found = false;
    let inputValue = $('.courses__search-input').val();
    if(inputValue.trim() != ''){
      for(let i = 0; i < courses.length; i++){
        let title = $(courses[i]).find('.courses__course-title');
        if(title.text().toLowerCase().indexOf(inputValue.toLowerCase()) === -1){
          $(courses[i]).css({'display':'none'})
        } else {
          $(courses[i]).css({'display':'block'})
          found = true;
        }
      }
      if(!found){
        $('.courses__no-course').css({'display':'block'});
      } else {
        $('.courses__no-course').css({'display':'none'});
      }
    } else {
      $('.courses__no-course').css({'display':'none'});
      $(courses).css({'display':'block'});
    }
  }
});
