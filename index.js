// UI variables
const navLogo = document.querySelector('#nav-logo')
const navBtns = document.querySelectorAll('.nav-btn')

window.onscroll = function () {
  hideLogo()
}

Array.from(navBtns).forEach(btn =>
  btn.addEventListener('click', () => {
    Array.from(navBtns).forEach(btn => btn.classList.remove('current'))
    btn.classList.add('current')
  }),
)

function hideLogo() {
  if (document.documentElement.scrollTop > 100) {
    navLogo.style.maxHeight = '0'
  }

  if (document.documentElement.scrollTop === 0) {
    navLogo.style.maxHeight = '108px'
  }
}
