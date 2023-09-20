let profileMenu = document.querySelector('#profileMenu');
let menuToggle = document.querySelector('#menuToggle');


menuToggle.addEventListener('click', function(){
    profileMenu.classList.toggle('open-menu')
})




let sideActivity = document.querySelector('#sidebarActivity')
let moreLink = document.querySelector('#showMoreLink')

function toggleActivity(){
    sideActivity.classList.toggle('open-activity')

    if(sideActivity.classList.contains('open-activity')){
        console.log('hello')
        moreLink.innerHTML = "Show less <b>-</b>"
    }else{
        console.log('hii')
        moreLink.innerHTML = "Show more <b>+</b>"
    }
}

// moreLink.addEventListener('click', toggleActivity());