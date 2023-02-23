const date = new Date();
$('.footer__date').text(date.getFullYear())

let navMobile = $('.nav__mobile')
$('.nav__side-nav-icon').click(toggleNav);
$('.nav__mobile-side-close').click(toggleNav);

$('.nav__search-icon').click(() => $('.nav__search-input').fadeIn())
$('.nav__search-close').click(() => $('.nav__search-input').fadeOut())

$(window).on('resize', () => {
  if($('body').innerWidth() >= 975){
    if($('.nav__mobile').attr('expanded') == 'true'){
      console.log('here');
      toggleNav();
    }
  }
})

function toggleNav(){
  if(navMobile.attr('expanded') == 'false'){
    $('html').css({'overflow':'hidden'})
    $(document.body).css({'overflow':'hidden'})
    navMobile.attr('expanded', 'true');
  } else {
    $('html').css({'overflow':'visible'})
    $(document.body).css({'overflow':'visible'})
    navMobile.attr('expanded', 'false');
  }
  navMobile.toggleClass('expanded');
}

function calcVideoHeight(video){
  video.height(video.width() * 9 / 16)
}

class Tabs{
  constructor(tabs, tabsContent){
    this.tabs = tabs;
    this.tabsContent = tabsContent;
    this.tabs.click((e) => {
      if($(e.target).hasClass('active')) return;
      this.activeTab(e.target)
    })
    this.activeTab(this.tabs[0]);
  }
}

Tabs.prototype.activeTab = function(tab) {
  $(this.tabs).removeClass('active');
  $(tab).addClass('active');
  let currTab = $(this.tabsContent).filter(`[data-id="${$(tab).attr('target-id')}"]`);
  let prevTab = $(this.tabsContent).filter(`[tab-active="true"]`);
  prevTab.attr('tab-active', 'false');
  currTab.attr('tab-active', 'true');
  prevTab.fadeOut('fast', () => {
    currTab.fadeIn();
  });
}

//Get the nav courses info
$.getJSON('Data/courses.json', (courses) => {
  let cnt = 0;
  for(course of courses){
    if(cnt++ == 6) return;
    let card = document.createElement('div');
    $(card).addClass('col-4');
    card.innerHTML = 
    `
    <div class="nav__course">
      <a class="nav__course-img" href="single-course.html?courseId=${course.id}">
        <img class="card-img-top w-100" src="assets/images/${course.image}" alt="">
      </a>
      <div class="nav__course-title">
        <a href="single-course.html?courseId=${course.id}">${course.title}</a>
      </div>
    </div>
    `
    $('.nav__courses').find('.row').append(card);
  }
});
$.getJSON('Data/courses.json', (courses) => {
  let cnt = 0;
  for(course of courses){
    if(cnt++ == 6) return;
    let card = document.createElement('div');
    $(card).addClass('col-4');
    card.innerHTML = 
    `
    <div class="nav__course">
      <a class="nav__course-img" href="single-course.html?courseId=${course.id}">
        <img class="card-img-top w-100" src="assets/images/${course.image}" alt="">
      </a>
      <div class="nav__course-title">
        <a href="single-course.html?courseId=${course.id}">${course.title}</a>
      </div>
    </div>
    `
    $('.nav__blogs').find('.row').append(card);
  }
});


//nav__dropdown-cont
let tempTime;
let dropdownConts = $('.nav__dropdown-cont');
$('.nav__item--hoverable').hover((e) => {
  clearTimeout(tempTime);
  let item = $(e.target).closest('.nav__item ');
  let curr, prev = -1;
  for(let i = 0; i < dropdownConts.length; i++){
    if($(dropdownConts[i]).attr('data-id') == item.attr('target-id'))
      curr = i;
    else
      if($(dropdownConts[i]).hasClass('appear')) prev = i;
  }
  $(dropdownConts[curr]).addClass('appear');
  if(prev == -1){
    $(dropdownConts[curr]).fadeIn();
  } else {
    $(dropdownConts[prev]).removeClass('appear');
    $(dropdownConts[prev]).fadeOut(() => {
      $(dropdownConts[curr]).fadeIn()
    })
  }
}, () => {
  tempTime = setTimeout(() => {
    $(dropdownConts).removeClass('appear')
    $(dropdownConts).fadeOut();
  }, 200);
})