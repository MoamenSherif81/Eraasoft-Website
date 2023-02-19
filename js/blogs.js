let tabs = $('.blogs__item');
tabs.click((e) => {
  let item = $(e.target);
  if(!item.hasClass('active')){
    tabs.removeClass('active');
    item.addClass('active');
    $('.blogs__card-cont').css({'display':'none'});
    if(item.attr('target') == 'all'){
      $('.blogs__card-cont').css({'display':'block'});
    } else {
      $('.blogs__card-cont').filter(`[card-category="${item.attr('target')}"]`).css({'display':'block'});
    }
  }
})