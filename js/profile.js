let mainTabs = $('.profile__tabs-item');
let mainTabsContent = $('.tab-content');

let blogsTabs = $('.profile-content__item--blogs');
let bogsTabsContent = $('.profile-content__item-content--blogs');


let tabsSystem = new Tabs(mainTabs, mainTabsContent);
let blogsTabsSystem = new Tabs(blogsTabs, bogsTabsContent);


let groupsTabs = $('.profile-content__item--groups');
let groupsTabsContent = $('.profile-content__item-content--groups');

let groupsTabsSystem = new Tabs(groupsTabs, groupsTabsContent);