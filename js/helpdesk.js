const tabItems = $('.help-questions__tabs-item');
const tabHeaders = $('.help-questions__tabs-header');
const tabBodies = $('.help-questions__tabs-body')
const mainContainer = $('.help-questions__container');
const tabsContainer = $('.help-questions__tabs-system');

tabHeaders.click((e) => {
  const item = $(e.target).closest('.help-questions__tabs-item');
  toggleTab(item);
});

toggleTab(tabItems.eq(0));

function toggleTab(tab) {
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
  if (!header.hasClass('active')) {
    tabHeaders.removeClass('active');
    header.addClass('active');
  }
}

let helpTabSystem = new Tabs('.help-questions__tabs-item', tabBodies);

$('.help-questions__category-header').click(function() {
  mainContainer.fadeOut('fast', () => {
    tabsContainer.fadeIn('fast', () => tabsContainer.css('display', 'flex'));
  })
  const tab = tabItems.filter(`[target-id="${$(this).attr('target-id')}"]`);
  tab.click();
  if(!tab.attr('list-active') === 'false')
    tab.find('.help-questions__tabs-header').click();
})