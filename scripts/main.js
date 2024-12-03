
const body = document.querySelector('body');
const main = document.querySelector('main');
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu(){

btnOpen.setAttribute('aria-expanded','true');
body.classList.add('noscroll');
navContent.removeAttribute('inert');
main.setAttribute('inert','');

btnClose.focus();
}

function closeMobileMenu(){   
    btnOpen.setAttribute('aria-expanded','false');
    body.classList.remove('noscroll');
    navContent.setAttribute('inert','');
    main.removeAttribute('inert');
    
    btnOpen.focus();
}

function setupNav(e){
    if(e.matches){
        //is mobile
        console.log('Mobile');
        navContent.setAttribute('inert','');
        setTimeout(()=>{
            navContent.style.display = 'block';     
            navOverlay.style.display = 'block';      
        },500);

    }else{
        //is desktop
        console.log('Desktop');
        navContent.removeAttribute('inert');
        main.removeAttribute('inert');

        navContent.style.display = '';    

    }
}
setupNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click',closeMobileMenu);
media.addEventListener('change',function(e){
    setupNav(e);
    console.log('window.matchMedia change = ' + e.matches); 
});

document.addEventListener('keyup',(e)=>{
if(e.key == 'Tab'){
    console.log(document.activeElement);
}
});


/*Year for footer*/
function displayYear(){
    const currentYear = document.getElementById('currentYear');    
    let year = new Date().getFullYear();
    currentYear.innerHTML = year;

};
// displayYear();
// const greet = document.getElementById('greet');
// const intro = document.getElementById('intro');
// const greetText = `Nice to meet you! ${<span class="feature__title__underline">I'm Shibu John Raphael</span>}`;
// const introText = `I'm Shibu John Raphael`;
// let idx = 1;
// dynTextAni()
// function dynTextAni(){
//     greet.innerText = greetText.slice(0,idx)
//     idx++
//     if(idx > greetText.length){
//         idx = 1;
//     }
//     setTimeout(dynTextAni,50)
// }
// dynTextAniTwo()
// function dynTextAniTwo(){
//     intro.innerText = introText.slice(0,idx)
//     idx++
//     if(idx > introText.length){
//         idx = 1;
//     }
//     setTimeout(dynTextAniTwo,100)
// }
/*Modal Popup */
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const viewCaseBtns = document.querySelectorAll('.projects__list__content__footer__btn__view');
// console.log(viewCaseBtns);

const popBtns = document.querySelectorAll('[data-target]');
const CloseBtnModalPop = document.querySelectorAll('.modal__close');
const overlay = document.querySelector('.overlay');


popBtns.forEach((btnCase) => {
    btnCase.addEventListener('click',() =>{
        document.querySelector(btnCase.dataset.target).classList.add('active');
        overlay.classList.add('active');
    });
});

CloseBtnModalPop.forEach((closeBtn) =>{
    closeBtn.addEventListener('click',() =>{
    document.querySelector(closeBtn.dataset.target).classList.remove('active');
   // closeBtn.closest('.modal').classList.remove('active');
    overlay.classList.remove('active');
    });
})
window.onclick = (e)=>{
    if(e.target == overlay){
      const modals = document.querySelectorAll('.modal');
      modals.forEach((modal)=>{
        modal.classList.remove('active');
        overlay.classList.remove('active');
      })
    }
}
// const closeModal = function(){
//     modal.classList.add('hidden');  
//     overlay.classList.add('hidden');
//     header.classList.remove('zindex');
// }
// const openModal = function(){
//     modal.classList.remove('hidden');    
//     overlay.classList.remove('hidden');
//     header.classList.add('zindex');
// }
// for(let i=0; i < viewCaseBtns.length; i++){
//   viewCaseBtns[i].addEventListener('click',function(){
//     if(modal.classList.contains('case-1')){
//         openModal();
//     }
    
//   });
// }
// modalCloseBtn.addEventListener('click',closeModal);
// overlay.addEventListener('click',closeModal);
// document.addEventListener('keydown',function(e){
//     if(e.key === 'Escape' && !modal.classList.contains('hidden')){    
//         closeModal();   
//     }
// });
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'scripts/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



  //visitors count
  countElem = document.getElementById('count')[0];
  updateCounter()
  function updateCounter(){
    fetch('')
    .then(res => res.json())
    .then(data => countElem.innerHTML = data.value);
  }