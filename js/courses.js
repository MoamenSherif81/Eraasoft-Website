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
$.getJSON('Data/courses.json', (courses) => {
  for(course of courses){
    let card = document.createElement('div');
    $(card).addClass('courses__course-cont col-12 col-sm-6 col-lg-4');
    let totalRevs = 0, totalStars = 0;
    card.innerHTML = 
    `
    <div class="courses__course card text-left">
      <a class="courses__img-link" href="single-course.html?courseId=${course.id}">
        <img class="card-img-top" src="assets/images/${course.image}" alt="">
      </a>
      <div class="courses__course-body">
        <p class="courses__course-sections">6 اقسام</p>
        <p class="courses__course-title">
          <a href="single-course.html?courseId=${course.id}">${course.title}</a>
        </p>
        <div class="courses__course-reviews d-flex">
          <div class="courses__course-reviews-stars d-flex flex-row-reverse">
          </div>
          <div class="courses__course-reviews-count">
          </div>  
        </div>
        <div class="courses__course-instructor d-flex align-items-center gap-2">
          <div class="courses__course-instructor-img">
            <img src="assets/images/student-1.jpg" class="w-100" alt="">
          </div>
          <div class="courses__course-instructor-name">Mostafa Mahfouz</div>
        </div>
        <div class="courses__course-description">
          ${course.description}
        </div>
      </div>
    </div>
    `
    let stars = $(card).find('.star');
    for(key in course.reviews){
      totalRevs += course.reviews[key];
      totalStars += course.reviews[key] * parseInt(key);
    }
    let rating = totalStars / totalRevs;
    let reviewsCont = $(card).find('.courses__course-reviews-stars');
    for(let i = 0; i < parseInt(rating); i++){
      $(stars[i]).addClass('filled');
      reviewsCont.append(`<i class="fa-solid fa-star"></i>`);
    }
    if(rating % 1 >= 0.75) 
    reviewsCont.append(`<i class="fa-solid fa-star"></i>`), rating = parseInt(rating) + 1;
    else if(rating % 1 >= 0.25) 
      reviewsCont.append(`<i class="fa-regular fa-star-half-stroke"></i>`), rating = parseInt(rating) + 1;
    for(let i = rating; i < 5; i++){
        reviewsCont.append(`<i class="fa-regular fa-star"></i>`);
      }
    $(card).find('.courses__course-reviews-count').text('(' + totalRevs + ')')
    $('.courses__list').find('.row').append(card);
  }
}).then(() => {
  let courses = $('.courses__course');
  $('.courses__search-input').keypress(function(event) {
    if (event.key == 'Enter') {
      let found = false;
      let inputValue = $('.courses__search-input').val();
      if(inputValue.trim() != ''){
        for(let i = 0; i < courses.length; i++){
          let title = $(courses[i]).find('.courses__course-title');
          console.log(inputValue);
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

});


