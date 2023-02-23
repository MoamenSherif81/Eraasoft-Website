//Global variables decalaration
let forms = $('.contact-us-main__form-cont')
let tabs = $('.contact-us-main__item');
let stars = $('.give-review__star');

$(document).ready(() => {
  //main section tabs click event
  tabs.click((e) => {
    if($(e.target).hasClass('active')) return;
    activeTab(e.target)
  })
  //Activate the first tab at the start of the page
  activeTab(tabs[0]);
  
  //review stars hover event 
  console.log(stars);
  stars.hover(e => {
    activeStars(e, 'hover-active');
  }, () => {
    stars.removeClass('hover-active');
  })
  //review stars click event 
  stars.click(e => {
    activeStars(e, 'active');
  })
})

//A function to activate a given tab in the main section
function activeTab(tab){
  //make the tab active and remove the active from the rest
  tabs.removeClass('active');
  $(tab).addClass('active');
  //search for the needed and the prev active tab
  let currTab = $(forms).filter(`[data-id="${$(tab).attr('target-form')}"]`);
  let prevTab = $(forms).filter(`[tab-active="true"]`);
  //switch the active attributes in the tabs cont
  prevTab.attr('tab-active', 'false');
  currTab.attr('tab-active', 'true');
  //Change tha actual tab by fade animation
  prevTab.fadeOut('fast', () => {
    currTab.fadeIn();
  });
}

//function to make the stars animation when hover
function animateStars(){
  stars.removeClass('hover-active');
  stars.removeClass('active');
  for(let i = 0; i < stars.length; i++){
    $(stars[i]).addClass('active');
    if(stars[i] == e.target.closest('.give-review__star')) break;
  }
}

//function to activate the stars that the user choose
function activeStars(e, cls){
  stars.removeClass(cls);
  for(let i = 0; i < stars.length; i++){
    $(stars[i]).addClass(cls);
    if(stars[i] == e.target.closest('.give-review__star')) break;
  }
}

$(window).resize(() => {
})