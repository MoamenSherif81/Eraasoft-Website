const tabItems = $('.help-questions__tabs-item');
const tabHeaders = $('.help-questions__tabs-header');
const tabBodies = $('.help-questions__tabs-body')
const mainContainer = $('.help-questions__container');
const tabsContainer = $('.help-questions__tabs-system');

tabHeaders.click((e) => {
  const item = $(e.target).closest('.help-questions__tabs-item');
  toggleTab(item, true);
});

function toggleTab(tab, ind) {
  const header = tab.find('.help-questions__tabs-header');
  const tabLists = $('.help-questions__tabs-list');
  const currList = tab.find('.help-questions__tabs-list');

  tabLists.height(0);
  if (tab.attr('list-active') === 'false') {
    tabItems.attr('list-active', 'false');
    tab.attr('list-active', 'true');
    currList.height(currList.prop('scrollHeight'));
  } else {
    tabItems.attr('list-active', 'false');
    tabLists.height(0);
  }
  activeHeader(header, ind);
}

function activeHeader(header, ind){
  if (!header.hasClass('active')) {
    tabHeaders.removeClass('active');
    header.addClass('active');
  }
  let head = $(header.closest('.help-questions__category'));
  if(!head.length) 
    head = $(header.closest('.help-questions__tabs-item'));
  const id = head.attr('target-id');
  if(ind){
    toggleSubTab(id ,0);
  }
}

let helpTabSystem = new Tabs('.help-questions__tabs-item', tabBodies);

function toggleSubTab(catID, itemID){
  const categoryCont = $('.help-questions__tabs-body').filter(`[data-id="${catID}"]`);  
  const categoryItems = categoryCont.find('.help-questions__sub-tabs-item');
  let item = categoryItems.filter(`[data-id="${itemID}"]`);
  let prevItem = categoryItems.filter(`[tab-active="true"]`);
  prevItem.attr('tab-active', 'false');
  item.attr('tab-active', 'true');
  prevItem.fadeOut(() => {
    item.fadeIn();
  })
}

$('.help-questions__item').click(function() {
  let head = $(this.closest('.help-questions__category'));
  if(!head.length) head = $(this.closest('.help-questions__tabs-item'));
  const id = head.attr('target-id');
  activeContainer(id, false);
  $('.help-questions__item').removeClass('active');
  $(this).addClass('active');
  toggleSubTab(id, $(this).attr('target-id'));
})

$('.help-questions__category-header').click(function() {
  activeContainer($(this).attr('target-id'), true);
})

function activeContainer(id, ind){
  mainContainer.fadeOut('fast', () => {
    tabsContainer.fadeIn('fast', () => {
      tabsContainer.css('display', 'flex')
      const tab = tabItems.filter(`[target-id="${id}"]`);
      tabItems.attr('list-active', 'false');
      toggleTab(tab, ind);
    });
  })
}
