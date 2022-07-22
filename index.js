// UI variables
const navLogo = document.querySelector('#nav-logo')

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
