// UI variables
const navLogo = document.querySelector('#nav-logo')
const homeBtn = document.getElementById('home-btn')
const aboutBtn = document.getElementById('about-btn')
const menuBtn = document.getElementById('menu-btn')
const contactBtn = document.getElementById('contact-btn')
const navBtns = document.querySelectorAll('.nav-btn')

window.onscroll = function () {
  hideLogo()
}

function hideLogo() {
  if (document.documentElement.scrollTop > 100) {
    navLogo.style.maxHeight = '0'
  }

  if (document.documentElement.scrollTop === 0) {
    navLogo.style.maxHeight = '108px'
  }
}
