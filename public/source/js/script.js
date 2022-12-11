// darkmode toggle
let toggle = document.querySelector('#toggle')
let html = document.documentElement
let body = document.querySelector('body')
    
const toggleDarkMode = () => {
    // ubah tema menjadi dark dan simpan data tema ke lokal storage
    if (toggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
        body.style.backgroundImage = "url(public/images/bg/bgdark.jpg)"
    } else {
        html.classList.remove("dark")
        localStorage.theme = "light"
        body.style.backgroundImage = "url(public/images/bg/bglight.jpg)"
    }

}
toggle.addEventListener('click', toggleDarkMode)

// pindahkan posisi switcher ke posisi yang sesuai dengan tema
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    toggle.checked = true
} else {
    toggle.checked = false
}

// end darkmode toggle

// fullscreen toggle
let fullscreen = document.querySelector('#fullscreen-toggle')
let fullscreenDesk = document.querySelector('#fullscreen-toggle-desk')

// android
fullscreen.addEventListener('click', () => {
    if (fullscreen.checked) {
        if (html.requestFullscreen) {
          html.requestFullscreen()
        } else if (html.webkitRequestFullscreen) {
          /* Safari */
          html.webkitRequestFullscreen()
        } else if (html.msRequestFullscreen) {
          /* IE11 */
          html.msRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen()
        }
    }
})
// desktop
fullscreenDesk.addEventListener('click', () => {
    if (fullscreenDesk.checked) {
        if (html.requestFullscreen) {
          html.requestFullscreen()
        } else if (html.webkitRequestFullscreen) {
          /* Safari */
          html.webkitRequestFullscreen()
        } else if (html.msRequestFullscreen) {
          /* IE11 */
          html.msRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          /* Safari */
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) {
          /* IE11 */
          document.msExitFullscreen()
        }
    }
})
// end fullscreen toggle

// menu dropdown android
let menuToggle = document.querySelector("#menu-toggle")
let menuDrop = document.querySelector('#menu-drop')


menuToggle.addEventListener("click", () => {
    menuDrop.classList.toggle("opacity-0")
    menuDrop.classList.toggle("-translate-x-0");
    body.classList.toggle("overflow-hidden")
})
// menu dropdown gotopage
let gotoPageToggle = document.querySelector("#goto-page-toggle")
let gotoPageDrop = document.querySelector('#goto-page-drop')
let bgblack = document.querySelector(".black-bg")


gotoPageToggle.addEventListener("click", () => {
    gotoPageDrop.classList.toggle("opacity-0")
})

// menu sidebar
let sidebarToggleIcon = document.querySelector("#sidebar-toggle-icon")
let sidebarToggle = document.querySelector("#sidebar-toggle")
let sidebarMenu = document.querySelector('#sidemenu')


sidebarToggle.addEventListener("click", () => {
  sidebarToggleIcon.classList.toggle("-rotate-180")
  sidebarMenu.classList.toggle("translate-x-[0.01rem]")
  body.classList.toggle("overflow-hidden");
  if (!gotoPageDrop.classList.contains("opacity-0")) {
      gotoPageDrop.classList.toggle("opacity-0")
  }
})

// end menu sidebar

// start to top

let toTop = document.getElementById("to-top")
let navbar = document.getElementById("navbar")
let contentAndroid = document.getElementById("content-android");

if (window.scrollY < 300) {
  toTop.classList.add("hidden")
  
}

window.onscroll = function() {
    if (window.scrollY > 300) {
      toTop.classList.remove("hidden")
      navbar.classList.add("fixed")
      contentAndroid.classList.add("py-28")
    } else {
      toTop.classList.add("hidden")
      navbar.classList.remove("fixed")
      contentAndroid.classList.remove("py-28");
    }
}
// end to top