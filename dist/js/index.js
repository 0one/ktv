//右侧滑动区域
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// var $menu = document.getElementById('menu');
// var hideOrShow = function(e){
//   $menu.classList.toggle('menu_show');
// }
// $menu.addEventListener("click",function(e){hideOrShow(e)},true);


var $swipers = document.querySelectorAll(".swiper-container");
// var $cates = document.querySelectorAll(".menu .cate");
// var showDetails = function(i,e){
//   console.log('showDetails' + i)
//   for (let i = 0; i < $swipers.length; i++) {
//     $swipers[i].style.display = "none";
//   }
//   $swipers[i].style.display = "block";
//   e.stopPropagation();
// }
// for (let i = 0; i < $cates.length; i++) {
//   $cates[i].addEventListener("click",(e) => {showDetails(i,e)},true);
// }


var showDetails = function(i,e){
  console.log('showDetails' + i)
  slideout.toggle();
  for (let i = 0; i < $swipers.length; i++) {
    $swipers[i].style.display = "none";
  }
  $swipers[i].style.display = "block";
  e.stopPropagation();
}

//左侧菜单栏
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

// Toggle button
document.querySelector('.js-slideout-toggle').addEventListener('click', function(e) {
  slideout.toggle();
  e.stopPropagation();
});

var $cates = document.querySelectorAll(".cate");
for (let i = 0; i < $cates.length; i++) {
  $cates[i].addEventListener("click",(e) => {showDetails(i,e)},true);
}

document.getElementById('panel').addEventListener('click',function(){
  slideout.close();
})
