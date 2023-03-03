let tabItem = $('.help-questions__tabs-item');
let tabHeader = $('.help-questions__tabs-header');
let tabBody = $('.help-questions__tabs-body');

tabHeader.click((e) => {
  let item = e.target.closest('.help-questions__tabs-item');
  toggleTab(item)
})
toggleTab($(tabItem[0]));

function toggleTab(tab){
  let header = $(tab).find('.help-questions__tabs-header');
  tabItem.find('.help-questions__tabs-list').height(0);
  if($(tab).attr('list-active') == 'false'){
    tabItem.attr('list-active', 'false');
    $(tab).attr('list-active', 'true');
    tabItem.find('.help-questions__tabs-list').height(0);
    let currList = $(tab).find('.help-questions__tabs-list');
    currList.height(currList.prop('scrollHeight'));
  } else {
    tabItem.attr('list-active', 'false');
  }
  if(!header.hasClass('active')){
    tabItem.find('.help-questions__tabs-header').removeClass('active');
    header.addClass('active');
  }
}

let helpTabSystem = new Tabs('.help-questions__tabs-item', tabBody);