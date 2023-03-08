const date = new Date();
$('.footer__date').text(date.getFullYear())

let navMobile = $('.nav__mobile')
$('.nav__side-nav-icon').click(toggleNav);
$('.nav__mobile-side-close').click(toggleNav);

$('.nav__search-icon').click(() => {
  console.log('Yes');
  $('.nav__search-input').toggleClass('expanded');
})

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
    $('nav').css({'position':'fixed', 'z-index':'101'});
    navMobile.attr('expanded', 'true');
  } else {
    $('html').css({'overflow':'visible'})
    $(document.body).css({'overflow':'visible'})
    $('nav').css({'position':'sticky', 'z-index':'100'});
    navMobile.attr('expanded', 'false');
  }
  navMobile.toggleClass('expanded');
}

function calcVideoHeight(video){
  video.height(video.width() * 9 / 16)
}

class Tabs{
  constructor(tabs, tabsContent, select){
    //initialize the main variables
    this.tabs = $(tabs);
    this.tabsContent = tabsContent;
    //Tab click event
    this.tabs.click((e) => {
      if($(e.target.closest(tabs)).hasClass('active')) return;
      this.activeTab(e.target.closest(tabs))
    })
    //Activate the first tab
    this.activeTab(this.tabs[0]);

    //Check if the tabsystem hav select dropdown
    if(select != undefined){
      this.select = select;
      this.tabs.click((e) => {
        let id = $(e.target).closest(tabs).attr('target-id');
        const tab = this.select.find('option').filter(`[target-id="${id}"]`).text();
        this.select.val(tab);
      })
      this.select.change((e) => {
        const id = $(e.target).find(':selected').attr('target-id');
        const tab = this.tabs.filter(`[target-id="${id}"]`);
        this.activeTab(tab);
      });
    }
  }
}

//A function to activate a given tab in the main section
Tabs.prototype.activeTab = function(tab) {
  //make the tab active and remove the active from the rest
  $(this.tabs).removeClass('active');
  $(tab).addClass('active');
  //search for the needed and the prev active tab
  const currTab = $(this.tabsContent).filter(`[data-id="${$(tab).attr('target-id')}"]`);
  const prevTab = $(this.tabsContent).filter(`[tab-active="true"]`);
  //switch the active attributes in the tabs cont
  prevTab.attr('tab-active', 'false');
  currTab.attr('tab-active', 'true');
  //Change tha actual tab by fade animation
  prevTab.fadeOut('fast', () => {
    currTab.fadeIn();
  });
}

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
  $(reply).find('.comments__textarea').val("");
  replies.append(reply);
  $('.comments__new-close').click((e) => {
    let cont = $(e.target).closest('.comments__new');
    cont.remove();
  })
})


let loggedin = true;
let newDiv = document.createElement('div');
if(!loggedin){
  newDiv.className = 'nav__buttons';
  newDiv.innerHTML = 
  `
  <a href="login.html" class="button--secondary">تسجيل الدخول</a>
  <a href="signup.html" class="button--primary">انشئ حساب</a>
  `
  $('.nav__messages').remove();
  $('.nav__notifications').remove();
} else {
  newDiv.className = 'nav__account';
  newDiv.innerHTML = 
  `
  <div class="nav__account">
    <div class="nav__account-info align-items-center gap-2">
      <div class="nav__account-name-cont">
        <span class="nav__account-name">Moamen Sherif</span>
        <i class="fa-solid fa-angle-down text-muted"></i>
      </div>
      <div class="nav__account-img">
        <img src="assets/images/student-1.jpg" alt="">
      </div>
      <div class="nav__account-body">
        <div class="nav__account-header d-flex align-items-center gap-1">
          <div class="nav__account-img">
            <img src="assets/images/student-1.jpg" alt="">
          </div>
          <div>
            <a href="profile.html" class="nav__account-name">Moamen Sherif</a>
            <div class="nav__account-username text-muted">@moamensherif</div>
          </div>
        </div>
        <ul class="nav__account-list list-unstyled m-0">
          <li class="nav__account-item"><a href="profile.html"><i class="fa-regular fa-user nav__account-icon"></i>الملف الشخصي</a></li>
          <li class="nav__account-item"><a href="profile.html?courses"><i class="fa-solid fa-graduation-cap nav__account-icon"></i>دوراتي</a></li>
          <li class="nav__account-item"><a href="settings.html"><i class="fa-solid fa-gear nav__account-icon"></i>الإعدادات</a></li>
          <li class="nav__account-item"><a href="edit-profile.html"><i class="fa-solid fa-cart-shopping nav__account-icon"></i></i>تعديل الملف الشخصي</a></li>
          <li class="nav__account-item"><a href=""><i class="fa-solid fa-arrow-right-from-bracket nav__account-icon"></i>تسجيل الخروج</a></li>
        </ul>
      </div>
    </div>
    <!-- End account info div -->
  </div>
  <!-- End account container div -->
  `
}
$('.nav__left').append(newDiv);

$('.nav__notifications-icon').click(() => {
  $('.nav__notifications-body').toggleClass('expanded')
})
$('.nav__messages-icon').click(() => {
  $('.nav__messages-body').toggleClass('expanded')
})
$('.nav__account-name-cont').click(() => {
  $('.nav__account-body').toggleClass('expanded')
})

$(document).click((e) => {
  if($('.nav__notifications-body').hasClass('expanded')){
    let item = $(e.target)
    if(!item.closest('.nav__notifications-body').length && !item.closest('.nav__notifications-icon').length){
      $('.nav__notifications-body').toggleClass('expanded')
    }
  }
  if($('.nav__messages-body').hasClass('expanded')){
    let item = $(e.target)
    if(!item.closest('.nav__messages-body').length && !item.closest('.nav__messages-icon').length){
      $('.nav__messages-body').toggleClass('expanded')
    }
  }
  if($('.nav__account-body').hasClass('expanded')){
    let item = $(e.target)
    if(!item.closest('.nav__account-body').length && !item.closest('.nav__account-name-cont').length){
      $('.nav__account-body').toggleClass('expanded')
    }
  }
})

$(document).ready(() => {
  const observedElements = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        const direction = $(item).attr('animation-dir');
        item.classList.add('animate');
        switch(direction){
          case 'bottom':
            item.style.animationName = 'animateBottom';
            break;
          case 'right':
            item.style.animationName = 'animateRight';
            break;
          case 'left':
            item.style.animationName = 'animateLeft';
            break;
          case 'top':
            item.style.animationName = 'animateTop';
            break;
          case 'popOut':
            item.style.animationName = 'popOut';
            break;
        }
        observer.unobserve(entry.target);
      }
    });
  });

  observedElements.forEach(ele => {
    observer.observe(ele);
  })
})